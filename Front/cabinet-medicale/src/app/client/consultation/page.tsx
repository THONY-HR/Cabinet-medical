"use client";

import Header from "../../Structure/Header";
import "../../page.css";
import SidebarClient from "@/app/Structure/SidebarClient";
import daoService from "@/app/services/DAOService";
import Button from "@/app/composant/Button";
import React, { useState, useEffect } from "react";
import CInput from "@/app/composant/CInput";
import CheckBox from "@/app/composant/CheckBox";
import { getSession } from "@/app/services/apiService";

export default function ConsultationPage() {
  // --- Etats et fonctions pour ExamSymptom ---
  const [showFormExamSymptom, setShowFormExamSymptom] = useState(false);
  // const [showFormActe, setShowFormActe] = useState(false);
  const [symptomExamList, setSymptomExamList] = useState<
    { idExam: string; exam: string; exam_id?: string }[]
  >([]);
//   const [acteMedicalList, setActeMedicalList] = useState<any[]>([]);
//   const [selectedSymptomExam, setSelectedSymptomExam] = useState<{
//     [id: string]: boolean;
//   }>({});

  type Parameter = {
    id_Parameter: string;
    parameter: string;
  };

  type Caracteristique = {
    id_Information: string;
    information: string;
  };

  type Symptom = {
    id_symptom: string;
    symptom: string;
  };

  type ActeMedicale = {
    id_acte: string;
    acte: string;
  };

  const [caracteristiques, setCaracteristiques] = useState<Caracteristique[]>(
    []
  );
  const [symptoms, setSymptoms] = useState<Symptom[]>([]);
  const [parameters, setParameters] = useState<Parameter[]>([]);
  const [actemedicale, setActeMedicale] = useState<ActeMedicale[]>([]);
  const [medicaments, setMedicaments] = useState<
    { id_phrarmaceuticals: string; phrarmaceutical: string }[]
  >([]);
  const [selectedMedicaments, setSelectedMedicaments] = useState<{
    [id: string]: boolean;
  }>({});
  const [medicamentInputs, setMedicamentInputs] = useState<{
    [id: string]: { quantite: string; frequence: string; duree: string };
  }>({});
  const [infoPatient, setInfoPatient] = useState<{
    name: string;
    lastname: string;
    adress: string;
    naissance: Date | null;
  }>({
    name: "",
    lastname: "",
    adress: "",
    naissance: new Date(),
  });
  const [caracValues, setCaracValues] = useState<{ [id: string]: string }>({});
  const [paramValues, setParamValues] = useState<{ [id: string]: string }>({});
  const [symptomValues, setSymmptomValues] = useState<{ [id: string]: string }>(
    {}
  );
  const [ExamsymptomValues, setExamSymmptomValues] = useState<{
    [id: string]: string;
  }>({});
  const [ActeMedicaleValues, setActeMedicaleValues] = useState<{
    [id: string]: string;
  }>({});
  const [showFormInfo, setShowFormInfo] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showFormMedicamentOrdonnace, setShowFormMedicamentOrdonnace] =
    useState(false);
  const [showFormSymptom, setShowFormSymptom] = useState(false);
  const [showFormPrescription, setShowFormPrescription] = useState(false);
  const [prescriptionData, setPrescriptionData] = useState({
    diagnostique: "",
    remarque: ""
  });

  useEffect(() => {
    daoService
      .getListeParameter()
      .then((result) => {
        const options = (Array.isArray(result) ? result : []).map(
          (u: { id_vitalParameter: string; parameter: string }) => ({
            id_Parameter: u.id_vitalParameter,
            parameter: u.parameter,
          })
        );
        console.log(options);

        setParameters(options);
      })
      .catch((err) => {
        alert(err);
      });

    daoService
      .findActeMedicale()
      .then((result) => {
        const options = (Array.isArray(result) ? result : []).map(
          (u: { id_acte_medicale: string; acte_medicale: string }) => ({
            id_acte: u.id_acte_medicale,
            acte: u.acte_medicale,
          })
        );
        console.log("daoServicefindActeMedicale: ", options);

        setActeMedicale(options);
      })
      .catch((err) => {
        alert(err);
      });

    daoService
      .getListeCaracteristique()
      .then((result) => {
        const options = (Array.isArray(result) ? result : []).map(
          (u: { id_info_personnelle: string; information: string }) => ({
            id_Information: u.id_info_personnelle,
            information: u.information,
          })
        );
        setCaracteristiques(options);
      })
      .catch((err) => {
        alert(err);
      });

    daoService
      .findAllSymptom()
      .then((result) => {
        const options = (Array.isArray(result) ? result : []).map(
          (u: { id_symptom: string; symptom: string }) => ({
            id_symptom: u.id_symptom,
            symptom: u.symptom,
          })
        );
        setSymptoms(options);
      })
      .catch((err) => {
        alert(err);
      });
    // Charger la liste des médicaments
    daoService
      .findAllPhrarmaceutical()
      .then((result) => {
        setMedicaments(Array.isArray(result) ? result : []);
      })
      .catch((err) => {
        alert(err);
      });

    daoService
      .findAlllExamsymptom()
      .then((result) => {
        setSymptomExamList(Array.isArray(result) ? result : []);
      })
      .catch((err) => {
        alert(err);
      });
    // Ajout : charger la liste des actes médicaux
    // daoService.findActeMedicale()
    //     .then((result) => {
    //         setActeMedicalList(Array.isArray(result) ? result : []);
    //     }).catch((err) => {
    //         alert(err);
    //     });
  }, []);

  const handleInfoPatientChange = (
    field: keyof typeof infoPatient,
    value: string | Date | null
  ) => {
    setInfoPatient((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitInfoPatient = async (e: React.FormEvent) => {
    e.preventDefault();
    const caracText = caracteristiques
      .map(
        (carac) =>
          `${carac.information} : ${caracValues[carac.id_Information] || ""}`
      )
      .join("\n");

    // Construction du body patient

    // Vérification de la date de naissance
    if (!infoPatient.naissance) {
      alert("Veuillez renseigner la date de naissance du patient.");
      return;
    }

    try {
      await daoService.addPatientAndInfo(
        infoPatient.name,
        infoPatient.lastname,
        infoPatient.adress,
        infoPatient.naissance as Date,
        {
          caracteristiques,
          caracValues,
        }
      );
      alert(
        `Informations patient :\n` +
          `Nom : ${infoPatient.name}\n` +
          `Prénom : ${infoPatient.lastname}\n` +
          `Adresse : ${infoPatient.adress}\n` +
          (caracText ? caracText + "\n" : "")
      );
      setShowFormInfo(false);
      setShowForm(true);
    } catch {
      alert("Erreur lors de l'enregistrement du patient");
    }
  };

  const submitParameterVital = async (e: React.FormEvent) => {
    e.preventDefault();
    const paramText = parameters
      .map(
        (param) =>
          `${param.parameter} : ${paramValues[param.id_Parameter] || ""}`
      )
      .join("\n");
    alert(paramText ? paramText + "\n" : "");
    // Récupérer l'id patient depuis le localStorage (set lors de l'ajout patient)

    try {
      await daoService.addParameterVitalPatient({
        parameters,
        paramValues,
      });
    } catch (error) {
      alert("Erreur lors de l'enregistrement des paramètres vitaux" + error);
    }
    setShowForm(false);
    setShowFormSymptom(true);
  };

  return (
    <main>
      <Header />
      <SidebarClient />
      <div className="flex justify-center w-full">
        {showFormInfo && (
          <form
            onSubmit={handleSubmitInfoPatient}
            className="flex flex-col gap-4 w-full max-w-md"
          >
            <h1 className="justify-center">Information Patient</h1>
            <div className="flex flex-col gap-2">
              <CInput
                value={infoPatient.name}
                onChange={(val) => handleInfoPatientChange("name", val)}
                placeholder="Nom"
              />
              <CInput
                value={infoPatient.lastname}
                onChange={(val) => handleInfoPatientChange("lastname", val)}
                placeholder="Prénom"
              />
              <CInput
                value={
                  infoPatient.naissance instanceof Date &&
                  !isNaN(infoPatient.naissance.getTime())
                    ? infoPatient.naissance.toISOString().split("T")[0]
                    : ""
                }
                onChange={(val) =>
                  handleInfoPatientChange(
                    "naissance",
                    val ? new Date(val) : null
                  )
                }
                placeholder="Date de naissance"
                type="date"
              />
              <CInput
                value={infoPatient.adress}
                onChange={(val) => handleInfoPatientChange("adress", val)}
                placeholder="Adresse"
              />
              {caracteristiques.map((carac) => (
                <div key={carac.id_Information}>
                  <CInput
                    value={caracValues[carac.id_Information] || ""}
                    onChange={(val) =>
                      setCaracValues((prev) => ({
                        ...prev,
                        [carac.id_Information]: val,
                      }))
                    }
                    placeholder={carac.information}
                  />
                </div>
              ))}
            </div>
            <Button type="submit">Confirmer</Button>
          </form>
        )}
        {showForm && (
          <form
            onSubmit={submitParameterVital}
            className="flex flex-col gap-4 w-full max-w-md"
          >
            <h1 className="justify-center">Remplir vitaux</h1>
            <div className="flex flex-col gap-2">
              {parameters.map((param) => (
                <div
                  key={param.id_Parameter}
                  className="flex items-center gap-2"
                >
                  <CheckBox
                    label={param.parameter}
                    checked={!!paramValues[param.id_Parameter]}
                    onChange={(checked) => {
                      setParamValues((prev) => {
                        if (!checked) {
                          // Uncheck: remove value
                          const rest = { ...prev };
                          delete rest[param.id_Parameter];
                          return rest;
                        } else {
                          // Check: initialize empty value if not present
                          return {
                            ...prev,
                            [param.id_Parameter]:
                              prev[param.id_Parameter] || "",
                          };
                        }
                      });
                    }}
                  />
                  {paramValues[param.id_Parameter] !== undefined && (
                    <div className="flex-1">
                      <CInput
                        value={paramValues[param.id_Parameter]}
                        onChange={(val) =>
                          setParamValues((prev) => ({
                            ...prev,
                            [param.id_Parameter]: val,
                          }))
                        }
                        placeholder={param.parameter}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Button type="submit">Enregistrer</Button>
          </form>
        )}

        {showFormSymptom && (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const symptomText = symptoms
                .map(
                  (symptom) =>
                    `${symptom.symptom} : ${
                      paramValues[symptom.id_symptom] ? "Oui" : "Non"
                    }`
                )
                .join("\n");
              alert(symptomText ? symptomText + "\n" : "");

              try {
                await daoService.createConsultationAndAddSymptomconsultation({
                  symptoms,
                  symptomValues,
                });
                setShowFormMedicamentOrdonnace(true);
                setShowFormSymptom(false);
              } catch (error) {
                alert(
                  "Erreur lors de l'enregistrement de la consultation/symptômes " +
                    error
                );
              }
            }}
            className="flex flex-col gap-4 w-full max-w-md"
          >
            <h1 className="justify-center">Remplir symptômes</h1>
            <div className="flex flex-row gap-2">
              {parameters.map((params) => (
                <p key={params.id_Parameter}>
                  {params.parameter} - {paramValues[params.id_Parameter]} ||{" "}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {symptoms.map((symptom) => (
                <div
                  key={symptom.id_symptom}
                  className="flex items-center gap-2"
                >
                  <CheckBox
                    label={symptom.symptom}
                    checked={!!symptomValues[symptom.id_symptom]}
                    onChange={(checked) => {
                      setSymmptomValues((prev) => {
                        if (!checked) {
                          const rest = { ...prev };
                          delete rest[symptom.id_symptom];
                          return rest;
                        } else {
                          return { ...prev, [symptom.id_symptom]: "checked" };
                        }
                      });
                    }}
                  />
                </div>
              ))}
            </div>
            <Button type="submit">Enregistrer</Button>
          </form>
        )}

        {showFormMedicamentOrdonnace && (
          <>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const ordonnances = medicaments
                  .filter((med) => selectedMedicaments[med.id_phrarmaceuticals])
                  .map((med) => ({
                    duree:
                      medicamentInputs[med.id_phrarmaceuticals]?.duree || "",
                    frequence:
                      medicamentInputs[med.id_phrarmaceuticals]?.frequence ||
                      "",
                    quantite:
                      medicamentInputs[med.id_phrarmaceuticals]?.quantite || "",
                    phrarmaceutical_id: med.id_phrarmaceuticals,
                    ordonnance_id: Number(
                      sessionStorage.getItem("consultationId")
                    ),
                  }));
                try {
                  await daoService.addOrdonnancedetailmedicament({
                    ordonnances,
                  });
                  alert("Ordonnance enregistrée avec succès");
                  setShowFormMedicamentOrdonnace(false);
                  setShowFormExamSymptom(true);
                } catch (error) {
                  alert(
                    "Erreur lors de l'enregistrement de l'ordonnance : " + error
                  );
                }
              }}
              className="flex flex-col gap-4 w-full max-w-md"
            >
              <h1 className="justify-center">Assigner les medicaments</h1>
              <div className="flex flex-col gap-2">
                {medicaments.map((med) => (
                  <div
                    key={med.id_phrarmaceuticals}
                    className="flex flex-col gap-1 border-b pb-2"
                  >
                    <CheckBox
                      label={med.phrarmaceutical}
                      checked={!!selectedMedicaments[med.id_phrarmaceuticals]}
                      onChange={(checked) => {
                        setSelectedMedicaments((prev) => ({
                          ...prev,
                          [med.id_phrarmaceuticals]: checked,
                        }));
                        if (
                          checked &&
                          !medicamentInputs[med.id_phrarmaceuticals]
                        ) {
                          setMedicamentInputs((prev) => ({
                            ...prev,
                            [med.id_phrarmaceuticals]: {
                              quantite: "",
                              frequence: "",
                              duree: "",
                            },
                          }));
                        }
                      }}
                    />
                    {selectedMedicaments[med.id_phrarmaceuticals] && (
                      <div className="flex gap-2 mt-1">
                        <CInput
                          value={
                            medicamentInputs[med.id_phrarmaceuticals]
                              ?.quantite || ""
                          }
                          onChange={(val) =>
                            setMedicamentInputs((prev) => ({
                              ...prev,
                              [med.id_phrarmaceuticals]: {
                                ...prev[med.id_phrarmaceuticals],
                                quantite: val,
                              },
                            }))
                          }
                          placeholder="Quantité"
                          type="number"
                        />
                        <CInput
                          value={
                            medicamentInputs[med.id_phrarmaceuticals]
                              ?.frequence || ""
                          }
                          onChange={(val) =>
                            setMedicamentInputs((prev) => ({
                              ...prev,
                              [med.id_phrarmaceuticals]: {
                                ...prev[med.id_phrarmaceuticals],
                                frequence: val,
                              },
                            }))
                          }
                          placeholder="Fréquence"
                        />
                        <CInput
                          value={
                            medicamentInputs[med.id_phrarmaceuticals]?.duree ||
                            ""
                          }
                          onChange={(val) =>
                            setMedicamentInputs((prev) => ({
                              ...prev,
                              [med.id_phrarmaceuticals]: {
                                ...prev[med.id_phrarmaceuticals],
                                duree: val,
                              },
                            }))
                          }
                          placeholder="Durée"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <Button type="submit">Enregistrer</Button>
            </form>
          </>
        )}
        {/* Affichage du bloc listeSymptomExam après validation */}
        {showFormExamSymptom && (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              // Récupérer les examens cochés et leur date
              const ordonnance_id = Number(
                sessionStorage.getItem("consultationId")
              );
              const examens = symptomExamList
                .filter((item) => ExamsymptomValues[item.idExam])
                .map((item) => ({
                  examen_id: item.exam_id || item.idExam,
                  ordonnance_id,
                  date_traitement:
                    ExamsymptomValues[item.idExam + "_date"] || "",
                }));
              // Récupérer les actes médicaux cochés et leur méthode de traitement
              const actes = actemedicale
                .filter((acte) => ActeMedicaleValues["acte_" + acte.id_acte])
                .map((acte) => ({
                  acte_id: acte.id_acte,
                  traitement:
                    ActeMedicaleValues["acte_" + acte.id_acte + "_date"] || "",
                }));

              // Vérifier si au moins un examen ou acte médical est sélectionné
              const hasExamens = examens.length > 0;
              const hasActes = actes.length > 0;

              if (!hasExamens && !hasActes) {
                // Aucun examen ni acte médical sélectionné - afficher juste le message de succès
                alert(
                  "Ordonnance créée avec succès ! Aucun examen ou acte médical n'a été sélectionné."
                );
                return;
              }

              // Affichage de l'alerte avec les examens et actes médicaux sélectionnés
              const examensText = examens
                .map(
                  (e) => `Examen ID: ${e.examen_id}, Date: ${e.date_traitement}`
                )
                .join("\n");
              const actesText = actes
                .map(
                  (a) =>
                    `Acte médical ID: ${a.acte_id}, Traitement: ${a.traitement}`
                )
                .join("\n");

              const alertMessage = [
                examensText && `Examens sélectionnés :\n${examensText}`,
                actesText && `Actes médicaux sélectionnés :\n${actesText}`,
              ]
                .filter(Boolean)
                .join("\n\n");

              if (alertMessage) {
                alert(alertMessage);
              }

              try {
                alert(typeof hasExamens + " " + hasExamens);
                alert(typeof hasActes + " " + hasActes);
                // Appeler les fonctions selon ce qui est sélectionné
                if (hasExamens && hasActes) {
                  // Les deux sont sélectionnés - appeler les deux fonctions
                  await daoService.addOrdonnanceExamen({ examens });
                  await daoService.addOrdonnanceActeMedicale({ actes });
                  alert("Examens et actes médicaux enregistrés avec succès");
                } else if (hasExamens) {
                  // Seulement des examens sélectionnés
                  await daoService.addOrdonnanceExamen({ examens });
                  alert("Examens enregistrés avec succès");
                } else if (hasActes) {
                  // Seulement des actes médicaux sélectionnés
                  await daoService.addOrdonnanceActeMedicale({ actes });
                  alert("Actes médicaux enregistrés avec succès");
                }
                setShowFormExamSymptom(false);
                setShowFormPrescription(true);
              } catch (err) {
                alert(
                  "Erreur lors de l'enregistrement des examens/actes : " + err
                );
              }
            }}
            className="flex flex-col gap-4 w-full max-w-md mt-8"
          >
            <h1 className="justify-center">Examens liés aux symptômes</h1>
            <div className="flex flex-col gap-2">
              {symptomExamList.map((item) => (
                <div key={item.idExam} className="flex items-center gap-2">
                  <p>{item.idExam} </p>
                  <CheckBox
                    label={item.exam}
                    checked={!!ExamsymptomValues[item.idExam]}
                    onChange={(checked) => {
                      setExamSymmptomValues((prev) => {
                        const newState = { ...prev };
                        if (!checked) {
                          delete newState[item.idExam];
                          delete newState[item.idExam + "_date"];
                        } else {
                          newState[item.idExam] = "checked";
                        }
                        return newState;
                      });
                    }}
                  />
                  {ExamsymptomValues[item.idExam] && (
                    <CInput
                      type="date"
                      value={ExamsymptomValues[item.idExam + "_date"] || ""}
                      onChange={(val) =>
                        setExamSymmptomValues((prev) => ({
                          ...prev,
                          [item.idExam + "_date"]: val,
                        }))
                      }
                      placeholder="Date de traitement"
                    />
                  )}
                </div>
              ))}

              <h2 className="mt-4">Actes médicaux</h2>

              {actemedicale.map((acte) => (
                <div key={acte.id_acte} className="flex items-center gap-2">
                  <p>{acte.id_acte} </p>
                  <CheckBox
                    label={acte.acte}
                    checked={!!ActeMedicaleValues["acte_" + acte.id_acte]}
                    onChange={(checked) => {
                      setActeMedicaleValues((prev) => {
                        const newState = { ...prev };
                        if (!checked) {
                          delete newState["acte_" + acte.id_acte];
                          delete newState["acte_" + acte.id_acte + "_date"];
                        } else {
                          newState["acte_" + acte.id_acte] = "checked";
                        }
                        return newState;
                      });
                    }}
                  />
                  {ActeMedicaleValues["acte_" + acte.id_acte] && (
                    <CInput
                      type="text"
                      value={
                        ActeMedicaleValues["acte_" + acte.id_acte + "_date"] ||
                        ""
                      }
                      onChange={(val) =>
                        setActeMedicaleValues((prev) => ({
                          ...prev,
                          ["acte_" + acte.id_acte + "_date"]: val,
                        }))
                      }
                      placeholder="Methode de traitement"
                    />
                  )}
                </div>
              ))}
            </div>
            <Button type="submit">Valider la sélection</Button>
            <Button
              type="button"
              onClick={() => {
                setShowFormExamSymptom(false);
                setShowFormPrescription(true);
                alert("Consultation finalisée avec succès !");
              }}
            >
              Finaliser
            </Button>
          </form>
        )}

        {showFormPrescription && (
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const consultationId = Number(getSession("consultationId"));
                await daoService.addPrescription({
                  ordonnance_id:consultationId,
                  diagnostique: prescriptionData.diagnostique,
                  remarque: prescriptionData.remarque
                });
                alert("Prescription enregistrée avec succès !");
                setShowFormPrescription(false);
              } catch (error) {
                alert("Erreur lors de l'enregistrement de la prescription : " + error);
              }
            }}
            className="flex flex-col gap-4 w-full max-w-md mt-8"
          >
            <h1 className="justify-center">Prescription médicale</h1>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Diagnostic</label>
                <CInput
                  value={prescriptionData.diagnostique}
                  onChange={(value) => setPrescriptionData(prev => ({ ...prev, diagnostique: value }))}
                  placeholder="Entrez le diagnostic"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Remarques</label>
                <CInput
                  value={prescriptionData.remarque}
                  onChange={(value) => setPrescriptionData(prev => ({ ...prev, remarque: value }))}
                  placeholder="Entrez les remarques"
                />
              </div>
            </div>
            <Button type="submit">Enregistrer la prescription</Button>
          </form>
        )}
      </div>
    </main>
  );
}
