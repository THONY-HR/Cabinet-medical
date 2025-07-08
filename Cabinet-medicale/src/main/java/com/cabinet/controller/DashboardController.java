package com.cabinet.controller;
import com.cabinet.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import com.cabinet.dto.DashboardOverviewDTO;
import com.cabinet.dto.ConsultationFullDTO;
import com.cabinet.repository.SymptomconsultationRepository;
import com.cabinet.repository.PrescriptionRepository;

@RestController
@RequestMapping("/dashboard")
public class DashboardController {

    @Autowired private PatientRepository patientRepository;
    @Autowired private ExamRepository examRepository;
    @Autowired private ConsultationRepository consultationRepository;
    @Autowired private OrdonnancedetailmedicamentRepository ordonnancedetailmedicamentRepository;
    @Autowired private OrdonnanceexamenRepository ordonnanceexamenRepository;
    @Autowired private ParameterpatientRepository parameterpatientRepository;
    @Autowired private SymptomRepository symptomRepository;
    @Autowired private TypeExamRepository typeExamRepository;
    @Autowired private VitalParameterRepository vitalParameterRepository;
    @Autowired private OrdonnancedetailactemedicaleRepository ordonnancedetailactemedicaleRepository;
    @Autowired private PhrarmaceuticalsRepository phrarmaceuticalsRepository;
    @Autowired private SymptomconsultationRepository symptomconsultationRepository;
    @Autowired private UniteRepository uniteRepository;
    @Autowired private PrescriptionRepository prescriptionRepository;

    @GetMapping("/overview")
    public ResponseEntity<DashboardOverviewDTO> getOverview() {
        DashboardOverviewDTO dto = new DashboardOverviewDTO(
            patientRepository.findAll(),
            examRepository.findAll(),
            consultationRepository.findAll(),
            ordonnancedetailmedicamentRepository.findAll(),
            ordonnanceexamenRepository.findAll(),
            parameterpatientRepository.findAll(),
            symptomRepository.findAll(),
            typeExamRepository.findAll(),
            vitalParameterRepository.findAll(),
            ordonnancedetailactemedicaleRepository.findAll()
        );
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/full-overview")
    public ResponseEntity<List<ConsultationFullDTO>> getFullOverview() {
        List<ConsultationFullDTO> result = new ArrayList<>();
        consultationRepository.findAll().forEach(consultation -> {
            ConsultationFullDTO dto = new ConsultationFullDTO();
            ConsultationFullDTO.ConsultationDTO c = new ConsultationFullDTO.ConsultationDTO();
            c.id_consultation = consultation.getId_consultation();
            c.date_consultation = consultation.getDate_consultation() != null ? consultation.getDate_consultation().toString() : null;
            // Patient
            if (consultation.getPatient_id() != 0) {
                patientRepository.findById(consultation.getPatient_id()).ifPresent(patient -> {
                    ConsultationFullDTO.PatientDTO p = new ConsultationFullDTO.PatientDTO();
                    p.id_patient = patient.getId_patient();
                    p.nom = patient.getNom();
                    p.prenom = patient.getPrenom();
                    p.naissance = patient.getNaissance() != null ? patient.getNaissance().toString() : null;
                    c.patient = p;
                });
            }
            // Ordonnancedetailmedicament (jointure ordonnance_id = consultation_id)
            List<ConsultationFullDTO.OrdonnancedetailmedicamentDTO> meds = new ArrayList<>();
            ordonnancedetailmedicamentRepository.findAll().forEach(med -> {
                if (med.getOrdonnance_id() == consultation.getId_consultation()) {
                    ConsultationFullDTO.OrdonnancedetailmedicamentDTO m = new ConsultationFullDTO.OrdonnancedetailmedicamentDTO();
                    m.id_ordonnance_detail_medicament = med.getId_ordonnance_detail_medicament();
                    m.ordonnance_id = med.getOrdonnance_id();
                    m.phrarmaceutical_id = med.getPhrarmaceutical_id();
                    m.quantite = med.getQuantite();
                    m.frequence = med.getFrequence();
                    m.duree = med.getDuree();
                    // Jointure avec Phrarmaceuticals
                    phrarmaceuticalsRepository.findById((long) med.getPhrarmaceutical_id()).ifPresent(pharma -> {
                        ConsultationFullDTO.PhrarmaceuticalDTO pharmaDTO = new ConsultationFullDTO.PhrarmaceuticalDTO();
                        pharmaDTO.id_phrarmaceuticals = pharma.getId_phrarmaceuticals().intValue();
                        pharmaDTO.phrarmaceutical = pharma.getPhrarmaceutical();
                        pharmaDTO.unite_id = (int) pharma.getUniteId();
                        pharmaDTO.value = pharma.getValue();
                        m.phrarmaceutical = pharmaDTO;
                    });
                    meds.add(m);
                }
            });
            c.ordonnancedetailmedicaments = meds;


            // Ordonnanceexamen (jointure ordonnance_id = id_consultation)
            List<ConsultationFullDTO.OrdonnanceExamenDTO> examens = new ArrayList<>();
            ordonnanceexamenRepository.findByOrdonnanceId(consultation.getId_consultation()).forEach(oe -> {
                ConsultationFullDTO.OrdonnanceExamenDTO oeDTO = new ConsultationFullDTO.OrdonnanceExamenDTO();
                oeDTO.id_ordonnance_examen = oe.getId_ordonnance_examen();
                oeDTO.ordonnance_id = oe.getOrdonnance_id();
                oeDTO.examen_id = oe.getExamen_id();
                oeDTO.date_traitement = oe.getDate_traitement() != null ? oe.getDate_traitement().toString() : null;
                // Jointure avec Exam
                examRepository.findById(oe.getExamen_id()).ifPresent(exam -> {
                    ConsultationFullDTO.ExamDTO examDTO = new ConsultationFullDTO.ExamDTO();
                    examDTO.id_exam = exam.getId_exam();
                    examDTO.exam = exam.getExam();
                    oeDTO.exam = examDTO;
                });
                examens.add(oeDTO);
            });
            c.ordonnanceexamens = examens;

            // SymptomConsultation (jointure consultation_id = id_consultation)
            List<ConsultationFullDTO.SymptomConsultationDTO> sympts = new ArrayList<>();
            symptomconsultationRepository.findAll().forEach(sc -> {
                if (sc.getConsultation_id() == consultation.getId_consultation()) {
                    ConsultationFullDTO.SymptomConsultationDTO scDTO = new ConsultationFullDTO.SymptomConsultationDTO();
                    scDTO.id_symptomconsultation = sc.getId_symptomconsultation();
                    // Jointure avec Symptom
                    symptomRepository.findById((long) sc.getSymptom_id()).ifPresent(sym -> {
                        ConsultationFullDTO.SymptomDTO sDTO = new ConsultationFullDTO.SymptomDTO();
                        sDTO.id_symptom = sym.getId_symptom().intValue();
                        sDTO.symptom = sym.getSymptom();
                        scDTO.symptom = sDTO;
                    });
                    sympts.add(scDTO);
                }
            });
            c.symptomconsultations = sympts;

            // Jointure avec Parameterpatient par date
            List<ConsultationFullDTO.ParameterPatientDTO> params = new ArrayList<>();
            parameterpatientRepository.findAll().forEach(pp -> {
                // Vérifie patient_id et date (en ignorant l'heure)
                if (pp.getPatient_id() == c.patient.id_patient &&
                    pp.getDate() != null &&
                    c.date_consultation != null &&
                    pp.getDate().toString().equals(c.date_consultation)) {
                    ConsultationFullDTO.ParameterPatientDTO paramDTO = new ConsultationFullDTO.ParameterPatientDTO();
                    paramDTO.id_parametre_patient = pp.getId_parametre_patient();
                    paramDTO.valeur = pp.getValeur();
                    // Ajoute ici le mapping de parametre_vitaux si besoin
                    vitalParameterRepository.findById((long) pp.getParametre_vitaux_id()).ifPresent(vp -> {
                        ConsultationFullDTO.VitalParameterDTO vpDTO = new ConsultationFullDTO.VitalParameterDTO();
                        vpDTO.id_vitalParameter = vp.getId_vitalParameter().intValue();
                        vpDTO.parameter = vp.getParameter();
                        vpDTO.value = vp.getValue();
                        vpDTO.min = vp.getMin();
                        vpDTO.max = vp.getMax();
                        // Ajoute l'unité si besoin
                        uniteRepository.findById((long) vp.getUniteId()).ifPresent(unite -> {
                            ConsultationFullDTO.UniteDTO uniteDTO = new ConsultationFullDTO.UniteDTO();
                            uniteDTO.id_unite = unite.getId_Unite().intValue();
                            uniteDTO.value = unite.getValue();
                            vpDTO.unite = uniteDTO;
                        });
                        paramDTO.parametre_vitaux = vpDTO;
                    });
                    paramDTO.date_consultation = pp.getDate().toString();
                    params.add(paramDTO);
                }
            });
            c.parameterpatients = params;

            // Jointure avec Prescription par ordonnance_id
            List<ConsultationFullDTO.PrescriptionDTO> prescriptions = new ArrayList<>();
            prescriptionRepository.findAll().forEach(prescription -> {
                if (prescription.getOrdonnance_id() == consultation.getId_consultation()) {
                    ConsultationFullDTO.PrescriptionDTO presDTO = new ConsultationFullDTO.PrescriptionDTO();
                    presDTO.id_prescription = prescription.getId_prescription();
                    presDTO.ordonnance_id = prescription.getOrdonnance_id();
                    presDTO.diagnostique = prescription.getDiagnostique();
                    presDTO.remarque = prescription.getRemarque();
                    prescriptions.add(presDTO);
                }
            });
            c.prescriptions = prescriptions;

            dto.consultation = c;
            result.add(dto);
        });
        return ResponseEntity.ok(result);
    }
}