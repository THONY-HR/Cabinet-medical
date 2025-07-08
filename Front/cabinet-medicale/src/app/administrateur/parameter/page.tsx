"use client";
// presentation/page.tsx

import Header from "../../Structure/Header";
import SidebarAdmin from "../../Structure/SidebarAdmin";
import "../../page.css"; // <--- important pour appliquer les styles de `.Page`
import daoService from "@/app/services/DAOService";
import Select from "@/app/composant/Select";

// import Form from "@/app/composant/Form";
import CInput from "@/app/composant/CInput";
import Button from "@/app/composant/Button";
import React, { useState } from "react";



export default function ParameterPage() {
    const [parameter, setParameter] = useState("");
    const [valueAdd, setValueAdd] = useState("");
    const [minValue, setMinValue] = useState("");
    const [maxValue, setMaxValue] = useState("");
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
        e.preventDefault();
        daoService.addParameter(parameter,Number(valueAdd),Number(minValue),Number(maxValue),Number(uniteId));
        alert(`Paramètre: ${parameter}\nValeur par défaut: ${valueAdd}\nMin: ${minValue}\nMax: ${maxValue}\nUnité ID: ${uniteId}`);
    };

    return (
        <main>
            <Header />
            <SidebarAdmin />
            <div className="flex justify-center w-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
                    <h1 className="justify-center">Insertion parametre vital</h1>
                    <CInput value={parameter} onChange={setParameter} placeholder="Paramètre" />
                    <CInput value={valueAdd} onChange={setValueAdd} type="number" placeholder="Valeur par défaut" />
                    <CInput value={minValue} onChange={setMinValue} type="number" placeholder="Valeur minimale" />
                    <CInput value={maxValue} onChange={setMaxValue} type="number" placeholder="Valeur maximale" />
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
