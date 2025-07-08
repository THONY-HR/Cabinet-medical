package com.cabinet.dto;

import java.util.Date;
import java.util.List;

public class ConsultationFullDTO {
    public static class InfoPersonnelleDTO {
        public int id_info_personnelle;
        public String information;
    }
    public static class InfoPatientDTO {
        public int id_infopatient;
        public String valeur;
        public Date date_consultation;
        public InfoPersonnelleDTO informationpersonnelle;
    }
    public static class UniteDTO {
        public int id_unite;
        public String value;
    }
    public static class VitalParameterDTO {
        public int id_vitalParameter;
        public String parameter;
        public double value;
        public double min;
        public double max;
        public UniteDTO unite;
    }
    public static class ParameterPatientDTO {
        public int id_parametre_patient;
        public double valeur;
        public VitalParameterDTO parametre_vitaux;
        public String date_consultation; // correspond à la colonne 'date' de parameterpatient, format yyyy-MM-dd (sans l'heure)
    }
    public static class PatientDTO {
        public int id_patient;
        public String nom;
        public String prenom;
        public String naissance;
    }
    public static class OrdonnancedetailactemedicaleDTO {
        public int id_ordonnance_detail_acte_medicale;
        public String traitements;
    }
    public static class ActeMedicaleDTO {
        public int id_acte_medicale;
        public String acte_medicale;
        public List<OrdonnancedetailactemedicaleDTO> ordonnancedetailactemedicale;
    }
    public static class SymptomDTO {
        public int id_symptom;
        public String symptom;
    }
    public static class ExamSymptomDTO {
        public int id_examSymptom;
        public SymptomDTO symptom;
    }
    public static class TypeExamDTO {
        public int id_typeexam;
        public String typeexam;
    }
    public static class OrdonnanceExamenDTO {
        public int id_ordonnance_examen;
        public int ordonnance_id; // Added to match entity
        public int examen_id;     // Added to match entity
        public ExamDTO exam; // jointure avec l'examen
        public String date_traitement; // Changed to String to match ConsultationDTO format
    }
    public static class ExamDTO {
        public int id_exam;
        public String exam;
        public TypeExamDTO type_exam;
        public List<ExamSymptomDTO> examsymptom;
        public List<OrdonnanceExamenDTO> ordonnanceexamen;
    }
    public static class PhrarmaceuticalDTO {
        public int id_phrarmaceuticals;
        public String phrarmaceutical;
        public int unite_id;
        public double value;
    }
    public static class OrdonnancedetailmedicamentDTO {
        public int id_ordonnance_detail_medicament;
        public int ordonnance_id;
        public int phrarmaceutical_id;
        public int quantite;
        public String frequence;
        public String duree;
        public PhrarmaceuticalDTO phrarmaceutical;
    }
    public static class OrdonnanceDTO {
        public int id_ordonnance;
        public List<OrdonnancedetailmedicamentDTO> ordonnancedetailmedicament;
    }
    public static class SymptomConsultationDTO {
        public int id_symptomconsultation;
        public SymptomDTO symptom;
    }
    public static class PrescriptionDTO {
        public int id_prescription;
        public int ordonnance_id;
        public String diagnostique;
        public String remarque;
    }
    public static class ConsultationDTO {
        public int id_consultation;
        public String date_consultation;
        public PatientDTO patient;
        public List<OrdonnancedetailmedicamentDTO> ordonnancedetailmedicaments;
        public List<SymptomConsultationDTO> symptomconsultations;
        public List<OrdonnanceExamenDTO> ordonnanceexamens;
        public List<ParameterPatientDTO> parameterpatients;
        public List<PrescriptionDTO> prescriptions;
    }
    public ConsultationDTO consultation;
} 