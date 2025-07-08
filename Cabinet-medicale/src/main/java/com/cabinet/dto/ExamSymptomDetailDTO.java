package com.cabinet.dto;

public class ExamSymptomDetailDTO {
    private int idExamSymptom;
    private int idExam;
    private String exam;
    private long idSymptom;
    private String symptom;

    public ExamSymptomDetailDTO(int idExamSymptom, int idExam, String exam, long idSymptom, String symptom) {
        this.idExamSymptom = idExamSymptom;
        this.idExam = idExam;
        this.exam = exam;
        this.idSymptom = idSymptom;
        this.symptom = symptom;
    }

    // Getters et setters
    public int getIdExamSymptom() { return idExamSymptom; }
    public void setIdExamSymptom(int idExamSymptom) { this.idExamSymptom = idExamSymptom; }
    public int getIdExam() { return idExam; }
    public void setIdExam(int idExam) { this.idExam = idExam; }
    public String getExam() { return exam; }
    public void setExam(String exam) { this.exam = exam; }
    public long getIdSymptom() { return idSymptom; }
    public void setIdSymptom(long idSymptom) { this.idSymptom = idSymptom; }
    public String getSymptom() { return symptom; }
    public void setSymptom(String symptom) { this.symptom = symptom; }
}