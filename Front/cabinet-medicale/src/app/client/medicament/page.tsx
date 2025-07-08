"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import daoService from "@/app/services/DAOService";
import Button from "@/app/composant/Button";
import CInput from "@/app/composant/CInput";
import CheckBox from "@/app/composant/CheckBox";
import Header from "../../Structure/Header";
import SidebarClient from "@/app/Structure/SidebarClient";
import "../../page.css";

interface Medicament {
  id_phrarmaceuticals: number;
  phrarmaceutical: string;
}

interface SelectedMedicament {
  id: number;
  name: string;
  quantite: number;
  resteStock: number;
}

export default function MedicamentPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const date = searchParams.get("date");
  const symptomes = searchParams.get("symptomes");

  // State pour les médicaments et le formulaire
  const [medicaments, setMedicaments] = useState<Medicament[]>([]);
  const [selectedMedicaments, setSelectedMedicaments] = useState<SelectedMedicament[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    daoService.findAllPhrarmaceutical()
      .then(setMedicaments)
      .catch(() => setMessage("Erreur chargement médicaments"));
  }, []);

  const handleCheckboxChange = async (medicament: Medicament, checked: boolean) => {
    if (checked) {
      try {
        const resteStock = await daoService.getResteStock(medicament.id_phrarmaceuticals);
        setSelectedMedicaments(prev => [...prev, {
          id: medicament.id_phrarmaceuticals,
          name: medicament.phrarmaceutical,
          quantite: 1,
          resteStock: resteStock
        }]);
      } catch {
        setMessage("Erreur lors du chargement du stock");
      }
    } else {
      setSelectedMedicaments(prev => prev.filter(m => m.id !== medicament.id_phrarmaceuticals));
    }
  };

  const handleQuantiteChange = (medicamentId: number, newQuantite: number) => {
    setSelectedMedicaments(prev => prev.map(m => {
      if (m.id === medicamentId) {
        // Permettre à l'utilisateur de saisir n'importe quelle valeur
        // La validation se fera lors de la soumission
        return { ...m, quantite: newQuantite };
      }
      return m;
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMedicaments.length === 0) {
      setMessage("Veuillez sélectionner au moins un médicament");
      return;
    }

    // Validation des quantités
    for (const medicament of selectedMedicaments) {
      if (medicament.quantite < 0) {
        setMessage(`La quantité pour ${medicament.name} ne peut pas être négative`);
        return;
      }
      if (medicament.quantite > medicament.resteStock) {
        setMessage(`La quantité pour ${medicament.name} ne peut pas dépasser le stock disponible (${medicament.resteStock})`);
        return;
      }
    }

    setMessage("");
    setLoading(true);
    
    try {
      for (const medicament of selectedMedicaments) {
        if (medicament.quantite > 0) {
          await daoService.addStockMedicament({
            phrarmaceutical_id: medicament.id,
            quantite: medicament.quantite,
            type_mouvement: 0, // Sortie
          });
        }
      }
      setMessage("Sortie de stock effectuée avec succès !");
      setSelectedMedicaments([]);
    } catch {
      setMessage("Erreur lors de la sortie de stock");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <SidebarClient />
      <div className="consultation-list-container" style={{ paddingLeft: 220, margin: '40px auto 0 auto', width: '60%' }}>
        <h1 className="text-xl font-bold mb-4">Détails de la consultation</h1>
        <div>
          <b>ID Consultation :</b> {id}
        </div>
        <div>
          <b>Date :</b> {date}
        </div>
        <div>
          <b>Liste des symptômes :</b>
          <ul className="list-disc ml-6">
            {symptomes
              ? symptomes.split(",").map((s, i) => (
                  <li key={i}>{decodeURIComponent(s)}</li>
                ))
              : <li>Aucun symptôme</li>}
          </ul>
        </div>

        <hr className="my-6" />
        <h2 className="text-lg font-semibold mb-2">Sortie de stock médicament</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4">
            {medicaments.map((medicament, index) => (
              <div key={`${medicament.id_phrarmaceuticals}-${index}`} className="flex items-center gap-4 p-3 border rounded">
                <CheckBox
                  label=""
                  checked={selectedMedicaments.some(m => m.id === medicament.id_phrarmaceuticals)}
                  onChange={(checked) => handleCheckboxChange(medicament, checked)}
                  className="flex-1"
                />
                <span className="flex-1">{medicament.phrarmaceutical}</span>
                {selectedMedicaments.find(m => m.id === medicament.id_phrarmaceuticals) && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                      Stock disponible: {selectedMedicaments.find(m => m.id === medicament.id_phrarmaceuticals)?.resteStock}
                    </span>
                    <CInput
                      value={String(selectedMedicaments.find(m => m.id === medicament.id_phrarmaceuticals)?.quantite)}
                      onChange={(value) => handleQuantiteChange(medicament.id_phrarmaceuticals, parseInt(value) || 0)}
                      className="w-20"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <Button type="submit" disabled={loading || selectedMedicaments.length === 0}>
            {loading ? "Traitement..." : "Effectuer la sortie de stock"}
          </Button>
          {message && <div className="mt-2 text-sm text-blue-600">{message}</div>}
        </form>
      </div>
    </div>
  );
}
