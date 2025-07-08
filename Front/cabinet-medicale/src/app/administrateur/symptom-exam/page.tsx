// presentation/page.tsx
"use client"
import Header from "../../Structure/Header";
import SidebarAdmin from "../../Structure/SidebarAdmin";
import "../../page.css"; // <--- important pour appliquer les styles de `.Page`
import React, { useState } from "react";
import daoService from "@/app/services/DAOService";
import Button from "@/app/composant/Button";
import Select from "@/app/composant/Select";


// export const metadata: Metadata = {
//     title: "Symptome Administrateur cabinet medicale",
//     description: "Page insertion ou consulter les listes des Symptomes de ce cabinet medicale",
// };


export default function SymptomExam() {
    const [symptomList, setSymptomList] = useState<{ value: string; label: string }[]>([]);
    const [symptomId,setSymptomId]=useState("");
    const [examId,setExamId]=useState("");
    const [examList, setExamList] = useState<{ value: string; label: string }[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    React.useEffect(() => {
        setLoading(true);
        daoService.findAllSymptom()
            .then((data) => {
                const options = (Array.isArray(data) ? data : []).map((u: any) => ({
                    value: u.id_symptom,
                    label: u.symptom
                }));
                setSymptomList(options);
                setLoading(false);
            })
            .catch((err) => {
                setError("Erreur lors du chargement des symptomes ");
                setLoading(false);
                console.error(err);
            });

        daoService.findAllExam()
            .then((data) => {
                const options = (Array.isArray(data) ? data : []).map((u: any) => ({
                    value: u.id_exam,
                    label: u.exam
                }));
                setExamList(options);
                setLoading(false);
            })
            .catch((err) => {
                setError("Erreur lors du chargement des examens ");
                setLoading(false);
                console.error(err);
            });
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        daoService.addSymptomExam(examId,symptomId);
        e.preventDefault();
    };
    return (
        <main>
            <Header />
            <SidebarAdmin />
            <div className="flex justify-center w-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
                    <h1 className="justify-center">Insertion Symptome Examen</h1>
                    <Select
                        data={symptomList}
                        value={symptomId}
                        onChange={setSymptomId}
                        placeholder={loading ? "Chargement..." : "Sélectionnez une symptome"}
                        className="w-full"
                    />

                    <Select
                        data={examList}
                        value={examId}
                        onChange={setExamId}
                        placeholder={loading ? "Chargement..." : "Sélectionnez un examen"}
                        className="w-full"
                    />
                        {error && <div className="text-red-500 text-sm">{error}</div>}
                    <Button type="submit">Enregistrer</Button>
                </form>
            </div>
        </main>
    );
}
