CREATE DATABASE cabinet;
use cabinet;

CREATE TABLE Unite (
    id_unite INT AUTO_INCREMENT PRIMARY KEY,
    value VARCHAR(50) NOT NULL
);

CREATE TABLE vitalparameter (
    id_vitalParameter INT AUTO_INCREMENT PRIMARY KEY,
    parameter VARCHAR(100) NOT NULL,
    value double,
    min double,
    max double,
    unite_id INT
);

CREATE TABLE Roleuser (
    id_roleuser INT AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(50) NOT NULL
);

CREATE TABLE User (
    id_user INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    roleuser_id INT NOT NULL
);

CREATE TABLE Symptom (
    id_symptom INT AUTO_INCREMENT PRIMARY KEY,
    symptom VARCHAR(255) NOT NULL
);

CREATE TABLE Phrarmaceuticals (
    id_phrarmaceuticals INT AUTO_INCREMENT PRIMARY KEY,
    phrarmaceutical VARCHAR(255) NOT NULL,
    unite_id INT,
    value DECIMAL(10,2)
);

CREATE TABLE TypeExam (
    id_typeexam INT AUTO_INCREMENT PRIMARY KEY,
    typeexam VARCHAR(100) NOT NULL
);

CREATE TABLE Exam (
    id_exam INT AUTO_INCREMENT PRIMARY KEY,
    type_exam_id INT NOT NULL,
    exam VARCHAR(255) NOT NULL,
    CONSTRAINT fk_type_exam FOREIGN KEY (type_exam_id) REFERENCES TypeExam(id_typeExam)
);

CREATE TABLE Examsymptom (
    id_examSymptom INT AUTO_INCREMENT PRIMARY KEY,
    exam_id INT NOT NULL,
    symptom_id INT NOT NULL
);

CREATE TABLE actemedicale (
    id_acte_medicale INT AUTO_INCREMENT PRIMARY KEY,
    acte_medicale VARCHAR(255) NOT NULL
);

CREATE TABLE Patient (
    id_patient INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    naissance DATE NOT NULL
);

CREATE TABLE Informationpersonnelle (
    id_info_personnelle INT AUTO_INCREMENT PRIMARY KEY,
    information TEXT NOT NULL
);

CREATE TABLE infopatient(
    id_infopatient INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    valeur TEXT,
    date_consultation DATE
)

-- CREATE TABLE Detailpatient (
--     id_detail_patient INT AUTO_INCREMENT PRIMARY KEY,
--     patient_id INT NOT NULL,
--     physique_patient_id INT NOT NULL,
--     date_consultation DATE NOT NULL,
--     information_personnelle_id INT NOT NULL,
--     CONSTRAINT fk_patient FOREIGN KEY (patient_id) REFERENCES Patient(id_patient),
--     CONSTRAINT fk_physique_patient FOREIGN KEY (physique_patient_id) REFERENCES PhysiquePatient(id_physique_patient),
--     CONSTRAINT fk_information_personnelle FOREIGN KEY (information_personnelle_id) REFERENCES InformationPersonnelle(id_info_personnelle)
-- );

CREATE TABLE Parametrepatient (
    id_parametre_patient INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    parametre_vitaux_id INT NOT NULL,
    valeur DECIMAL(10,2)
);

CREATE TABLE consultation(
    id_consultation INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    date_consultation DATE
);

CREATE TABLE symptomconsultation
(
    id_symptomconsultation INT AUTO_INCREMENT PRIMARY KEY,
    consultation_id INT,
    symptom_id INT
);

CREATE TABLE Ordonnance (
    id_ordonnance INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT NOT NULL,
    CONSTRAINT fk_patient_ordonnance FOREIGN KEY (patient_id) REFERENCES Patient(id_patient)
);


CREATE TABLE Ordonnancedetailmedicament (
    id_ordonnance_detail_medicament INT AUTO_INCREMENT PRIMARY KEY,
    ordonnance_id INT NOT NULL,
    phrarmaceutical_id INT NOT NULL,
    quantite INT NOT NULL,
    frequence VARCHAR(100),
    duree VARCHAR(100)
);


CREATE TABLE Ordonnanceexamen (
    id_ordonnance_examen INT AUTO_INCREMENT PRIMARY KEY,
    examen_id INT NOT NULL,
    ordonnance_id INT NOT NULL,
    date_traitement DATE
);

CREATE TABLE Ordonnancedetailactemedicale (
    id_ordonnance_detail_acte_medicale INT AUTO_INCREMENT PRIMARY KEY,
    ordonnance_id INT NOT NULL,
    acte_medicale_id INT NOT NULL,
    traitements TEXT
);

CREATE TABLE Prescription (
    id_prescription INT AUTO_INCREMENT PRIMARY KEY,
    ordonnance_id INT NOT NULL,
    diagnostique TEXT,
    remarque TEXT,
    CONSTRAINT fk_ordonnance_prescription FOREIGN KEY (ordonnance_id) REFERENCES Ordonnance(id_ordonnance)
);

CREATE TABLE SuiviPostExamen (
    id_suivi_post_examen INT AUTO_INCREMENT PRIMARY KEY,
    prescription_id INT NOT NULL,
    new_ordonnance_id INT NOT NULL,
    CONSTRAINT fk_prescription_suivi FOREIGN KEY (prescription_id) REFERENCES Prescription(id_prescription),
    CONSTRAINT fk_new_ordonnance FOREIGN KEY (new_ordonnance_id) REFERENCES Ordonnance(id_ordonnance)
);