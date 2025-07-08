"use client";// presentation/page.tsx
import Header from "../../Structure/Header";
import SidebarAdmin from "../../Structure/SidebarAdmin";
import "../../page.css"; // <--- important pour appliquer les styles de `.Page`
import daoService from "@/app/services/DAOService";
import Select from "@/app/composant/Select";

// import Form from "@/app/composant/Form";
import CInput from "@/app/composant/CInput";
import Button from "@/app/composant/Button";
import React, { useState } from "react";


export default function ExamPage() {
    const [typeexamVal, setTypeexamVal] = useState("");
    const [exam, setExam] = useState("");
    const [typeexamId, settypeexamId] = useState("");
     const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [uniteOptions, setUniteOptions] = useState<{ value: string; label: string }[]>([]);

    // const [valueAdd, setValueAdd] = useState("");

    const handleSubmitTypeExam = (e: React.FormEvent) => {
        e.preventDefault();
        daoService.addTypeExam(String(typeexamVal));
        alert(typeexamVal);
    };

    const handleSubmitExam = (e: React.FormEvent) => {
        e.preventDefault();
        daoService.addExam(String(exam),typeexamId);
        alert(typeexamVal);
    };

    React.useEffect(() => {
        setLoading(true);
        daoService.findAllTypeExam()
            .then((data) => {
                const options = (Array.isArray(data) ? data : []).map((u: any) => ({
                    value: u.id_typeexam,
                    label: u.typeexam
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
    return (
        <main>
            <Header />
            <SidebarAdmin />

            <div className="flex justify-center w-full">
                <form onSubmit={handleSubmitTypeExam} className="flex flex-col gap-4 w-full max-w-md">
                    <h1 className="justify-center">Insertion Type Examen</h1>
                    <CInput value={typeexamVal} onChange={setTypeexamVal} placeholder="Type examen" />
                    <Button type="submit">Enregistrer</Button>
                </form>
            </div>

            <div className="flex justify-center w-full">
                <form onSubmit={handleSubmitExam} className="flex flex-col gap-4 w-full max-w-md">
                    <h1 className="justify-center">Insertion Examen</h1>
                    <CInput value={exam} onChange={setExam} placeholder="Type examen" />
                    <Select
                        data={uniteOptions}
                        value={typeexamId}
                        onChange={settypeexamId}
                        placeholder={loading ? "Chargement..." : "Sélectionnez un type examen"}
                        className="w-full"
                    />
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                    <Button type="submit">Enregistrer</Button>
                </form>
            </div>
        </main>
    );
}
