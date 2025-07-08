// presentation/page.tsx
"use client";
import Header from "../../Structure/Header";
import SidebarAdmin from "../../Structure/SidebarAdmin";
import "../../page.css"; // <--- important pour appliquer les styles de `.Page`
import CInput from "@/app/composant/CInput";
import React, { useState } from "react";
import daoService from "@/app/services/DAOService";
import Button from "@/app/composant/Button";


// export const metadata: Metadata = {
//     title: "Symptome Administrateur cabinet medicale",
//     description: "Page insertion ou consulter les listes des Symptomes de ce cabinet medicale",
// };


export default function AdmiPage() {
    const [symptom, setSymptom] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        daoService.addSymptom(symptom);
        e.preventDefault();
    };
    return (
        <main>
            <Header />
            <SidebarAdmin />
            <div className="flex justify-center w-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
                    <h1 className="justify-center">Insertion Symptome</h1>
                    <CInput value={symptom} onChange={setSymptom} placeholder="Nom symptome" />
                    <Button type="submit">Enregistrer</Button>
                </form>
            </div>
        </main>
    );
}
