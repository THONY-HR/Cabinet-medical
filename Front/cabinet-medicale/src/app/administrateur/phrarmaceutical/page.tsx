"use client";
// presentation/page.tsx
import Header from "../../Structure/Header";
import SidebarAdmin from "../../Structure/SidebarAdmin";
import "../../page.css"; // <--- important pour appliquer les styles de `.Page`
import Select from "@/app/composant/Select";
import CInput from "@/app/composant/CInput";
import React, { useState } from "react";
import daoService from "@/app/services/DAOService";
import Button from "@/app/composant/Button";

// export const metadata: Metadata = {
//     title: "Medicaments Administrateur cabinet medicale",
//     description: "Page insertion ou consulter les listes des medicaments de ce cabinet medicale",
// };


export default function AdmiPage() {
    
        const [valueAdd, setValueAdd] = useState("");
        const [priceAdd, setPriceAdd] = useState("");
        const [phrarmaceutical, setPhrarmaceutical] = useState("");
        const [uniteId, setUniteId] = useState("");
        const [uniteOptions, setUniteOptions] = useState<{ value: string; label: string }[]>([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState<string | null>(null);

        React.useEffect(() => {
            setLoading(true);
            daoService.getListeUnite()
                .then((data) => {
                    const options = (Array.isArray(data) ? data : []).map((u: any) => ({
                        value: u.id_Unite,
                        label: u.value
                    }));
                    setUniteOptions(options);
                    setLoading(false);
                })
                .catch((err) => {
                    setError("Erreur lors du chargement des unités ");
                    setLoading(false);
                    console.error(err);
                });
        }, []);

        const handleSubmit = (e: React.FormEvent) => {
            daoService.addPhrarmaceutical(phrarmaceutical,Number(valueAdd),Number(uniteId),Number(priceAdd));
            e.preventDefault();
        };
    return (
        <main>
            <Header />
            <SidebarAdmin />
            <div className="flex justify-center w-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
                    <h1 className="justify-center">Insertion Medicament</h1>
                    <CInput value={phrarmaceutical} onChange={setPhrarmaceutical} placeholder="Nom medicament" />
                    <CInput value={valueAdd} onChange={setValueAdd} type="number" placeholder="Valeur par défaut" />
                    <CInput value={priceAdd} onChange={setPriceAdd} type="number" placeholder="Prix actuelle de medicament" />
                    <Select
                        data={uniteOptions}
                        value={uniteId}
                        onChange={setUniteId}
                        placeholder={loading ? "Chargement..." : "Sélectionnez une unité"}
                        className="w-full"
                    />
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                    <Button type="submit">Enregistrer</Button>
                </form>
            </div>
        </main>
    );
}
