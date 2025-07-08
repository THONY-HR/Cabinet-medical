import { getData, postData , setSession, getSession } from "./apiService";

class DAOService {
  // Ajout d'une ordonnance examen
  async addOrdonnanceExamen({ examens }: { examens: { examen_id: string, date_traitement: string }[] }) {
    try {
      const consultationId = Number(getSession("consultationId"));
      for (const ex of examens) {
        const body = {
          examen_id: Number(ex.examen_id),
          ordonnance_id: consultationId,
          date_traitement: ex.date_traitement
        };
        await postData("/ordonnanceexamen/add", body);
      }
    } catch (error) {
      throw error;
    }
  }

  async addOrdonnanceActeMedicale({ actes }: { actes: { acte_id: string, traitement: string }[] }) {
    try {
      const consultationId = Number(getSession("consultationId"));
      for (const ex of actes) {
        const body = {
          acte_medicale_id: Number(ex.acte_id),
          ordonnance_id: consultationId,
          traitements: ex.traitement
        };
        await postData("/ordonnancedetailactemedicale/add", body);
      }
    } catch (error) {
      throw error;
    }
  }
  
  async getListeUnite() {
    try {
      return await getData("/unit/list");
    } catch (error) {
      throw error;
    }
  }

  async findAlllExamsymptom() {
    try {
      console.log("findAlllExamsymptom ",await getData("/examsymptom/details"));
      return await getData("/examsymptom/details");     
      
    } catch (error) {
      throw error;
    }
  }

  async addUnite(uniteName: string) {
    try {
      const body = {
        value: uniteName,
      };
      await postData("/unit/add", body);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async addParameter(
    parameterName: string,
    valueAdd: number,
    minAdd: number,
    maxAdd: number,
    id: number
  ) {
    try {
      const body = {
        parameter: parameterName,
        value: valueAdd,
        min: minAdd,
        max: maxAdd,
        uniteId: id,
      };

      const data = await postData("/vitalParameter/add", body);
      console.log("data post: ", data);
    } catch (error) {
      throw error;
    }
  }

  async addPhrarmaceutical(
    phrarmaceuticalVal: string,
    valueAdd: number,
    id: number,
    priceAdd: number
  ) {
    try {
      const body = {
        phrarmaceutical: phrarmaceuticalVal,
        value: valueAdd,
        uniteId: id,
        prix:priceAdd
      };

      const data = await postData("/medicament/add", body);
      console.log("data post: ", data);
    } catch (error) {
      throw error;
    }
  }

  async addSymptom(symptomName: string) {
    try {
      const body = {
        symptom: symptomName,
      };
      await postData("/symptome/add", body);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async addTypeExam(typeExamenVal: string) {
    try {
      console.log("typeName ", typeExamenVal);

      const body = {
        typeexam: typeExamenVal,
      };
      const data = await postData("/typeexam/add", body);
      console.log(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async addActe(acte: string) {
    try {
      const body = {
        acte_medicale: acte,
      };
      const data = await postData("/acte/add", body);
      console.log(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async addInfoPersonnal(informationValue: string) {
    try {
      const body = {
        information: informationValue,
      };
      const data = await postData("/informationpersonnelle/add", body);
      console.log(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async addSymptomExam(examValId: string, symptomValId: string) {
    try {
      const body = {
        exam_id: Number(examValId),
        symptom_id: Number(symptomValId),
      };
      // alert("body "+body)
      console.log("body ",body);
      
      const data = await postData("/examsymptom/add", body);
      console.log("addSymptomExam ",data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async addExam(examValue: string, typeExamenIdVal: string) {
    try {
      console.log("typeName ", typeExamenIdVal);

      const body = {
        exam: examValue,
        type_exam_id: Number(typeExamenIdVal),
      };
      const data = await postData("/exam/add", body);
      console.log(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findAllTypeExam() {
    try {
      return await getData("/typeexam/list");
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getListeParameter() {
    try {
      console.log("parameter: ", await getData("/vitalParameter/list"));

      return await getData("/vitalParameter/list");
    } catch (error) {
      throw error;
    }
  }

  async getListeCaracteristique() {
    try {
      return await getData("/informationpersonnelle/list");
    } catch (error) {
      throw error;
    }
  }

  async findAllSymptom() {
    try {
      return await getData("/symptome/list");
    } catch (error) {
      throw error;
    }
  }

  async findAllPhrarmaceutical() {
    try {
      console.log("await ",await getData("/medicament/list"));
      
      return await getData("/medicament/list");
    } catch (error) {
      throw error;
    }
  }

  

  async findAllExam() {
    try {
      return await getData("/exam/list");
    } catch (error) {
      throw error;
    }
  }

  async findAllConsultation() {
    try {
      console.log("findAllConsultation ",await getData("/dashboard/full-overview"));
      
      return await getData("/dashboard/full-overview");
    } catch (error) {
      throw error;
    }
  }

  async findActeMedicale() {
    try {    
      console.log("findActeMedicale ",await getData("/acte/list"));
        
      return await getData("/acte/list");
    } catch (error) {
      throw error;
    }
  }

  async addPatientAndInfo(
    namePatient: string,
    lastName: string,
    adressVal: string,
    naissanceDate: Date,
    caracteristique: {
      caracteristiques: { id_Information: string | number; information: string }[];
      caracValues: { [id: string]: string };
    }
  ) {
    try {

      const dateNow=new Date();
      let patient_idVal=0;
      const existing = await getData(
        `/patient/find?nom=${encodeURIComponent(
          namePatient
        )}&prenom=${encodeURIComponent(lastName)}`
      );
      if (Array.isArray(existing) && existing.length > 0) {
        console.log("Un patient avec ce nom et prénom existe déjà.",existing);
        patient_idVal= existing[0].id_patient;
      }

      if (patient_idVal<= 0) {
        const bodyPatient = {
          naissance: naissanceDate,
          nom: namePatient,
          prenom: lastName,
          adress: adressVal,
        };
        const responsePatient = await postData("/patient/add", bodyPatient);
        console.log("responsePatient ", responsePatient);
        patient_idVal=responsePatient.id_patient;
      }      

      if (caracteristique && Array.isArray(caracteristique.caracteristiques)) {
        setSession("patientId",patient_idVal);
        for (const carac of caracteristique.caracteristiques) {
          const value = caracteristique.caracValues[carac.id_Information];
          console.log(
            `${carac.information} : ${carac.id_Information}: ${value}`
          );

          const bodyInfoPatient = {
            date_consultation: dateNow,
            patient_id: patient_idVal,
            valeur: value,
            informationpersonnelle_id: carac.id_Information
          };
          console.log(bodyInfoPatient);

          await postData("/infopatient/add", bodyInfoPatient);
        }
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async addParameterVitalPatient(params: { parameters: { id_Parameter: string; parameter: string }[], paramValues: { [id: string]: string } }) {
    try {
      const patientId = Number(localStorage.getItem("patientId"));
      // Pour chaque paramètre vital sélectionné, envoyer la valeur associée
      for (const param of params.parameters) {
        const value = params.paramValues[param.id_Parameter];
        if (value !== undefined && value !== "") {
          const body = {
            patient_id: patientId,
            parametre_vitaux_id: param.id_Parameter,
            valeur: value
          };
          console.log("bodyParameterVital", body);
          await postData("/parameterpatient/add", body);
        }
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createConsultationAndAddSymptomconsultation({ symptoms, symptomValues }: { symptoms: { id_symptom: string, symptom: string }[], symptomValues: { [id: string]: string } }) {
    try {
      // Créer la consultation
      const dateNow = new Date();
      const patientId = Number(localStorage.getItem("patientId"));
      const bodyConsultation = {
        date_consultation: dateNow,
        patient_id: patientId
      };
      console.log("bodyConsultation: ",bodyConsultation);
      
      const responseConsult = await postData("/consultation/add", bodyConsultation);
      const consultationId = responseConsult.id_consultation;

      setSession("consultationId",consultationId);

      const consultationIdGet = getSession("consultationId");
      console.log("consultationId ",consultationIdGet);   

      // Associer chaque symptôme coché à la consultation
      for (const symptom of symptoms) {
        if (symptomValues[symptom.id_symptom]) {
          const bodySymptomConsult = {
            consultation_id: consultationId,
            symptom_id: symptom.id_symptom
          };
          console.log("symptom_id ",symptom.id_symptom);
          await postData("/symptomconsultation/add", bodySymptomConsult);
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async addOrdonnancedetailmedicament({ ordonnances }: { ordonnances: { duree: string; frequence: string; quantite: string; phrarmaceutical_id: string; ordonnance_id: number }[] }) {
    try {
      const consultationId = Number(getSession("consultationId"));
      console.log("consultationId ",consultationId);      
      for (const ordonnance of ordonnances) {
        const body = {
          duree: ordonnance.duree,
          frequence: ordonnance.frequence,
          quantite: Number(ordonnance.quantite),
          phrarmaceutical_id: ordonnance.phrarmaceutical_id,
          ordonnance_id: consultationId
        };
        const data = await postData("/ordonnancedetailmedicament/add", body);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async addStockMedicament(stock: { phrarmaceutical_id: number; quantite: number; type_mouvement: number }) {
    try {
      return await postData("/stockmedicament/add", stock);
    } catch (error) {
      throw error;
    }
  }

  async getResteStock(phrarmaceutical_id: number) {
    try {
      return await getData(`/stockmedicament/reste/${phrarmaceutical_id}`);
    } catch (error) {
      throw error;
    }
  }

  async addPrescription(prescription: { ordonnance_id: number; diagnostique: string; remarque: string }) {
    try {
      return await postData("/prescription/add", prescription);
    } catch (error) {
      throw error;
    }
  }
}


const daoService = new DAOService();
export default daoService;
