"use client";
import React, { useEffect, useState } from "react";
import daoService from "@/app/services/DAOService";
import Button from "@/app/composant/Button";
import Header from "@/app/Structure/Header";
import SidebarAdmin from "@/app/Structure/SidebarAdmin";
import "../../../page.css";



export default function MedicamentPage() {
  interface Medicament {
    id_phrarmaceutical: string;
    phrarmaceutical: string;
  }

  // State pour les médicaments et le formulaire
  const [medicaments, setMedicaments] = useState<Medicament[]>([]);
  const [selectedMedicament, setSelectedMedicament] = useState("");
  const [quantite, setQuantite] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    daoService.findAllPhrarmaceutical()
      .then((result) => {
        const options = (Array.isArray(result) ? result : []).map(
          (u: { id_phrarmaceuticals: number; phrarmaceutical: string }) => ({
            id_phrarmaceutical: String(u.id_phrarmaceuticals),
            phrarmaceutical: u.phrarmaceutical,
          })
        );
        console.log(options);

        setMedicaments(options)})
      .catch(() => setMessage("Erreur chargement médicaments"));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
        alert(selectedMedicament);
      await daoService.addStockMedicament({
        phrarmaceutical_id: Number(selectedMedicament),
        quantite: Number(quantite),
        type_mouvement: 1,
      });
    console.log("selectedMedicament ",selectedMedicament);
    
      setMessage("Stock ajouté avec succès !");
      setQuantite("");
      setSelectedMedicament("");
    } catch {
      setMessage("Erreur lors de l'ajout du stock");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <SidebarAdmin />
      <div className="consultation-list-container" style={{ paddingLeft: 420, margin: '50px auto 0 auto' }}>

        <hr className="my-6" />
        <h2 className="text-lg font-semibold mb-2">Ajouter un stock de médicament</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
          <label>
            Médicament :
            <select
              value={selectedMedicament}
              onChange={e => setSelectedMedicament(e.target.value)}
              required
              className="border rounded p-2 w-full"
            >
              <option value="">-- Choisir un médicament --</option>
              {medicaments.map((m) => (
                <option key={m.id_phrarmaceutical} value={m.id_phrarmaceutical}>
                  {m.phrarmaceutical}
                </option>
              ))}
            </select>
          </label>
          <label>
            Quantité :
            <input
              type="number"
              min="1"
              value={quantite}
              onChange={e => setQuantite(e.target.value)}
              required
              className="border rounded p-2 w-full"
            />
          </label>
          <Button type="submit" disabled={loading || !selectedMedicament || !quantite}>
            {loading ? "Ajout..." : "Ajouter au stock"}
          </Button>
          {message && <div className="mt-2 text-sm text-blue-600">{message}</div>}
        </form>
      </div>
    </div>
  );
}
