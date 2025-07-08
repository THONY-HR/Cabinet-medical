"use client";
import React, { useEffect, useState } from "react";
import daoService from "@/app/services/DAOService";
import Button from "@/app/composant/Button";
import { useRouter } from "next/navigation";
import Header from "../../Structure/Header";
import "../../page.css";
import SidebarClient from "@/app/Structure/SidebarClient";

// Type minimal pour ConsultationFullDTO (adapter si besoin)
type ConsultationFullDTO = {
  consultation: {
    id_consultation: number;
    date_consultation: string;
    patient: {
      id_patient: number;
      nom: string;
      prenom: string;
      naissance: string;
    };
    ordonnancedetailmedicaments: any[];
    symptomconsultations: any[];
    ordonnanceexamens: any[];
    parameterpatients: any[];
    prescriptions: {
      id_prescription: number;
      ordonnance_id: number;
      diagnostique: string;
      remarque: string;
    }[];
  };
};

export default function ConsultationList() {
  const [consultations, setConsultations] = useState<ConsultationFullDTO[]>([]);
  const [selected, setSelected] = useState<ConsultationFullDTO | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Appel API pour récupérer la liste
    daoService
      .findAllConsultation()
      .then((data) => setConsultations(data))
      .catch((err) => alert("Erreur chargement consultations : " + err));
  }, []);

  return (
    <div>
      <Header />
      <SidebarClient />
      <div className="consultation-list-container" style={{ paddingLeft: 300, margin: '50px auto 0 auto' }}>
        <h1>Liste des consultations</h1>
        <div className="flex flex-col gap-2">
          {consultations.map((c) => (
            <div
              key={c.consultation.id_consultation}
              className="border p-2 cursor-pointer hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setSelected(c)}
            >
              <strong>
                {c.consultation.patient?.nom} {c.consultation.patient?.prenom}
              </strong>
              <div>Id consultation : {c.consultation.id_consultation}</div>
              <div>Date : {c.consultation.date_consultation}</div>
              <div>
                <b>Diagnostique: </b> {c.consultation.prescriptions?.[0]?.diagnostique || 'Non renseigné'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal d'affichage des détails */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-150"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white p-6 rounded shadow-lg min-w-[70vw] max-w-[100vw] text-black"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-2 text-black">
              Consultation du {selected.consultation.date_consultation}
            </h2>
            <div className="text-black">
              <b>Patient :</b> {selected.consultation.patient?.nom} {selected.consultation.patient?.prenom}
              <br />
              <b>Naissance :</b> {selected.consultation.patient?.naissance}
            </div>
            <div className="mt-2">
              <b>Paramètres :</b>
              <ul>
                {selected.consultation.parameterpatients?.map((p: any, i: number) => (
                  <li key={i}>
                    <b>{p.parametre_vitaux?.parameter} :</b> {p.valeur} {p.parametre_vitaux?.unite?.value || ''}
                    <span className="text-gray-400 ml-2">({p.date_consultation})</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-2">
              <b>Symptômes :</b>
              <ul>
                {selected.consultation.symptomconsultations?.map((s: any, i: number) => (
                  <li key={i}>{s.symptom?.symptom} </li>
                ))}
              </ul>
            </div>
            <div className="mt-2">
              <b>Médicaments :</b>
              <ul>
                {selected.consultation.ordonnancedetailmedicaments?.map((m: any, i: number) => (
                  <li key={i}>
                    {m.phrarmaceutical?.phrarmaceutical} (Quantité: {m.quantite}, Fréquence: {m.frequence}, Durée: {m.duree})
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-2">
              <b>Examens :</b>
              <ul>
                {selected.consultation.ordonnanceexamens?.map((ex: any, i: number) => (
                  <li key={i}>
                    {ex.exam?.exam} (Date: {ex.date_traitement})
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-2">
              <b>Prescription :</b>
              <ul>
                {selected.consultation.prescriptions?.map((prescription, i: number) => (
                  <li key={i}>
                    <div><b>Diagnostic :</b> {prescription.diagnostique || 'Non renseigné'}</div>
                    <div><b>Remarques :</b> {prescription.remarque || 'Aucune remarque'}</div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Bouton Post suivi si examens */}
            {selected.consultation.ordonnanceexamens &&
              selected.consultation.ordonnanceexamens.length > 0 && (
                <Button
                  type="button"
                  onClick={() => alert("Post suivi pour la consultation " + selected.consultation.id_consultation)}
                  className="mt-4"
                >
                  Post suivi existant
                </Button>
              )}
            <div className="mt-4 text-right">
              <Button type="button" onClick={() => setSelected(null)}>
                Confirmer
              </Button>

              <Button
                type="button"
                onClick={() => {
                  if (selected) {
                    const id = selected.consultation.id_consultation;
                    const date = encodeURIComponent(selected.consultation.date_consultation);
                    const symptomes = encodeURIComponent(
                      (selected.consultation.symptomconsultations || [])
                        .map((s: any) => s.symptom?.symptom)
                        .filter(Boolean)
                        .join(",")
                    );
                    router.push(`/client/medicament?page=medicament&id=${id}&date=${date}&symptomes=${symptomes}`);
                  }
                }}
              >
                Achat Medicament
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 