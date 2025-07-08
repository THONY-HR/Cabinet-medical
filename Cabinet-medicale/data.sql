USE cabinet;

-- Unités
INSERT INTO Unite (value) VALUES ('mg'), ('ml'), ('bpm'), ('°C'), ('mmHg');

-- Paramètres vitaux
INSERT INTO vitalparameter (parameter, value, min, max, unite_id) VALUES
('Température corporelle', 37.0, 36.5, 37.5, 4),
('Fréquence cardiaque', 72, 60, 100, 3),
('Tension artérielle systolique', 120, 90, 140, 5),
('Tension artérielle diastolique', 80, 60, 90, 5);

-- Rôles utilisateur
INSERT INTO Roleuser (role) VALUES ('Médecin'), ('Infirmier'), ('Admin');

-- Utilisateurs
INSERT INTO User (name, password, roleuser_id) VALUES
('Dr. Jean Dupont', 'mdp123', 1),
('Sophie Martin', 'inf456', 2),
('Admin System', 'adminpass', 3);

-- Symptômes
INSERT INTO Symptom (symptom) VALUES
('Fièvre'),
('Toux'),
('Maux de tête'),
('Fatigue'),
('Douleur abdominale');

-- Médicaments
INSERT INTO Phrarmaceuticals (phrarmaceutical, unite_id, value) VALUES
('Paracétamol', 1, 500),
('Ibuprofène', 1, 200),
('Amoxicilline', 1, 1000),
('Seringue de glucose', 2, 10);

-- Types d'examen
INSERT INTO TypeExam (typeexam) VALUES ('Sang'), ('Urine'), ('Imagerie'), ('Cardio');

-- Examens
INSERT INTO Exam (type_exam_id, exam) VALUES
(1, 'Hémogramme complet'),
(1, 'Glycémie à jeun'),
(3, 'Radio thoracique'),
(4, 'ECG');

-- Liens symptômes ↔ examens
INSERT INTO Examsymptom (exam_id, symptom_id) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 2),
(1, 4);

-- Actes médicaux
INSERT INTO actemedicale (acte_medicale) VALUES
('Injection intramusculaire'),
('Suture plaie'),
('Pose de perfusion');

-- Patients
INSERT INTO Patient (nom, prenom, naissance) VALUES
('Durand', 'Claire', '1985-06-14'),
('Nguyen', 'Minh', '1992-09-03'),
('Lopez', 'Carlos', '1978-12-23');

-- Informations personnelles
INSERT INTO Informationpersonnelle (information) VALUES
('Allergie au pollen'),
('Diabétique de type 2'),
('Hypertension traitée');

-- Infos patient (consultations)
INSERT INTO infopatient (patient_id, valeur, date_consultation) VALUES
(1, 'Consultation pour fièvre et maux de tête', '2025-07-01'),
(2, 'Suivi tension artérielle', '2025-06-28'),
(3, 'Bilan général', '2025-06-20');

-- Paramètres vitaux des patients
INSERT INTO Parametrepatient (patient_id, parametre_vitaux_id, valeur) VALUES
(1, 1, 38.2),
(1, 2, 85),
(2, 3, 145),
(2, 4, 95),
(3, 2, 70);

-- Consultations
INSERT INTO consultation (patient_id, date_consultation) VALUES
(1, '2025-07-01'),
(2, '2025-06-28'),
(3, '2025-06-20');

-- Symptômes liés aux consultations
INSERT INTO symptomconsultation (consultation_id, symptom_id) VALUES
(1, 1),
(1, 3),
(2, 4),
(3, 5);

-- Ordonnances
INSERT INTO Ordonnance (patient_id) VALUES
(1),
(2),
(3);

-- Détails ordonnance : médicaments
INSERT INTO Ordonnancedetailmedicament (ordonnance_id, phrarmaceutical_id, quantite, frequence, duree) VALUES
(1, 1, 10, '3 fois par jour', '5 jours'),
(2, 2, 15, '2 fois par jour', '7 jours'),
(3, 3, 20, '1 fois par jour', '10 jours');

-- Ordonnances d'examen
INSERT INTO Ordonnanceexamen (examen_id, ordonnance_id, date_traitement) VALUES
(1, 1, '2025-07-02'),
(3, 2, '2025-06-29'),
(4, 3, '2025-06-21');

-- Détail acte médical sur ordonnance
INSERT INTO Ordonnancedetailactemedicale (ordonnance_id, acte_medicale_id, traitements) VALUES
(1, 1, '1 injection toutes les 12h'),
(2, 2, 'Suture avec points de résorption'),
(3, 3, 'Perfusion de glucose 10ml');

-- Prescription
INSERT INTO Prescription (ordonnance_id, diagnostique, remarque) VALUES
(1, 'Infection virale', 'Reposez-vous bien'),
(2, 'Hypertension', 'Suivi régulier nécessaire'),
(3, 'Examen complémentaire requis', 'Voir ECG');

-- Suivi post examen
INSERT INTO SuiviPostExamen (prescription_id, new_ordonnance_id) VALUES
(1, 2),
(2, 3);
