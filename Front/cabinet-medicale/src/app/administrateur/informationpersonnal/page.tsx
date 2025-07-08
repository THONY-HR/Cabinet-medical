"use client";

import Header from "../../Structure/Header";
import SidebarAdmin from "../../Structure/SidebarAdmin";
import "../../page.css"; // <--- important pour appliquer les styles de `.Page`

// import Form from "@/app/composant/Form";
import CInput from "@/app/composant/CInput";
import Button from "@/app/composant/Button";
import React, { useState } from "react";
import daoService from "@/app/services/DAOService";

export default function UnitePage() {
    const [information, setInformation] = useState("");
    // const [ObjectUnite, setObjectUnite]=useState("");

    // React.useEffect(()=>{
    //     daoService.getListeUnite();
    // })

    const handleSubmit = (e: React.FormEvent) => {
        daoService.addInfoPersonnal(information);
        e.preventDefault();
        alert(`Value: ${information}`);
    };

    return (
        <main>
            <Header />
            <SidebarAdmin />
            <div className="flex justify-center w-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
                    <h1>Insertion caracteristique </h1>
                    <CInput value={information} onChange={setInformation} placeholder="Saisir une unite" />
                    <Button type="submit">Enregistrer</Button>
                </form>

            </div>
        </main>
    );
}
