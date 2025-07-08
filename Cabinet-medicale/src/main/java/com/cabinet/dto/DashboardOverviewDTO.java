package com.cabinet.dto;

public class DashboardOverviewDTO {
    private Iterable<?> patients;
    private Iterable<?> exams;
    private Iterable<?> consultations;
    private Iterable<?> ordonnancedetailmedicaments;
    private Iterable<?> ordonnanceexamens;
    private Iterable<?> parameterpatients;
    private Iterable<?> symptoms;
    private Iterable<?> typeexams;
    private Iterable<?> vitalparameters;
    private Iterable<?> ordonnancedetailactemedicales;

    public DashboardOverviewDTO(Iterable<?> patients, Iterable<?> exams, Iterable<?> consultations,
                                Iterable<?> ordonnancedetailmedicaments, Iterable<?> ordonnanceexamens,
                                Iterable<?> parameterpatients, Iterable<?> symptoms, Iterable<?> typeexams,
                                Iterable<?> vitalparameters, Iterable<?> ordonnancedetailactemedicales) {
        this.patients = patients;
        this.exams = exams;
        this.consultations = consultations;
        this.ordonnancedetailmedicaments = ordonnancedetailmedicaments;
        this.ordonnanceexamens = ordonnanceexamens;
        this.parameterpatients = parameterpatients;
        this.symptoms = symptoms;
        this.typeexams = typeexams;
        this.vitalparameters = vitalparameters;
        this.ordonnancedetailactemedicales = ordonnancedetailactemedicales;
    }

    public Iterable<?> getPatients() { return patients; }
    public Iterable<?> getExams() { return exams; }
    public Iterable<?> getConsultations() { return consultations; }
    public Iterable<?> getOrdonnancedetailmedicaments() { return ordonnancedetailmedicaments; }
    public Iterable<?> getOrdonnanceexamens() { return ordonnanceexamens; }
    public Iterable<?> getParameterpatients() { return parameterpatients; }
    public Iterable<?> getSymptoms() { return symptoms; }
    public Iterable<?> getTypeexams() { return typeexams; }
    public Iterable<?> getVitalparameters() { return vitalparameters; }
    public Iterable<?> getOrdonnancedetailactemedicales() { return ordonnancedetailactemedicales; }

    public void setPatients(Iterable<?> patients) { this.patients = patients; }
    public void setExams(Iterable<?> exams) { this.exams = exams; }
    public void setConsultations(Iterable<?> consultations) { this.consultations = consultations; }
    public void setOrdonnancedetailmedicaments(Iterable<?> ordonnancedetailmedicaments) { this.ordonnancedetailmedicaments = ordonnancedetailmedicaments; }
    public void setOrdonnanceexamens(Iterable<?> ordonnanceexamens) { this.ordonnanceexamens = ordonnanceexamens; }
    public void setParameterpatients(Iterable<?> parameterpatients) { this.parameterpatients = parameterpatients; }
    public void setSymptoms(Iterable<?> symptoms) { this.symptoms = symptoms; }
    public void setTypeexams(Iterable<?> typeexams) { this.typeexams = typeexams; }
    public void setVitalparameters(Iterable<?> vitalparameters) { this.vitalparameters = vitalparameters; }
    public void setOrdonnancedetailactemedicales(Iterable<?> ordonnancedetailactemedicales) { this.ordonnancedetailactemedicales = ordonnancedetailactemedicales; }
} 