// presentation/page.tsx
import type { Metadata } from "next";
import Header from "../Structure/Header";
import "../page.css"; // <--- important pour appliquer les styles de `.Page`

export const metadata: Metadata = {
    title: "Presentation de cabinet medicale",
    description: "Presentation de la creation de ce projet cabinet medicale",
};

export default function PresentationPage() {
    return (
        <main>
            <Header />
            <div className="Page p-8 text-white min-h-screen">
                <h1 className="text-4xl font-bold mb-6">Présentation du Cabinet Médical</h1>
                
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Qu&apos;est-ce qu&apos;un cabinet médical ?</h2>
                    <p className="mb-4 text-lg">
                        Un cabinet médical est une structure de soins où des médecins consultent des patients pour 
                        diagnostiquer leurs pathologies, prescrire des traitements, effectuer des actes médicaux et suivre 
                        leur évolution.
                    </p>
                    <p className="mb-4 text-lg">
                        Actuellement, les cabinets médicaux ne sont pas numérisés mais ils utilisent souvent des cahiers ou 
                        des outils peu adaptés pour enregistrer les données médicales.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Notre équipe</h2>
                    <p className="mb-4">
                        Notre cabinet médical est composé d&apos;une équipe pluridisciplinaire au service de votre santé :
                        médecins généralistes, infirmiers, assistants médicaux, etc.
                    </p>
                    <p className="mb-4">
                        Nous offrons des services de consultation, de soins, examens, et de suivi personnalisé pour chaque patient.
                    </p>
                    <p className="mb-4">
                        La qualité, l&apos;écoute et la bienveillance sont au cœur de notre engagement médical.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Objectifs du projet de numérisation</h2>
                    <ul className="list-disc list-inside mb-4 space-y-2">
                        <li>Simplifier le suivi des consultations et des traitements des patients</li>
                        <li>Suivre les stocks ou inventaire des médicaments pour un cabinet</li>
                        <li>Faire un bilan sur les symptômes fréquents et les types d&apos;examens prescrits</li>
                        <li>Numériser la gestion du cabinet via une application web</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Résultats attendus</h2>
                    <ul className="list-disc list-inside mb-4 space-y-2">
                        <li>Un accès sécurisé pour les médecins à leurs comptes et aux consultations</li>
                        <li>Un historique médical clair et consultable</li>
                        <li>Une meilleure coordination dans la prise en charge du patient</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
