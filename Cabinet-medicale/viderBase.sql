SET FOREIGN_KEY_CHECKS = 0;

DELETE FROM actemedicale;
DELETE FROM consultation;
DELETE FROM exam;
DELETE FROM examsymptom;
DELETE FROM infopatient;
DELETE FROM informationpersonnelle;
DELETE FROM ordonnancedetailactemedicale;
DELETE FROM ordonnancedetailmedicament;
DELETE FROM ordonnanceexamen;
DELETE FROM parameterpatient;
DELETE FROM patient;
DELETE FROM phrarmaceuticals;
DELETE FROM prescription;
DELETE FROM roleuser;
DELETE FROM stock_medicament;
DELETE FROM symptom;
DELETE FROM symptomconsultation;
DELETE FROM typeexam;
DELETE FROM unite;
DELETE FROM user;
DELETE FROM vitalparameter;


SET FOREIGN_KEY_CHECKS = 1;