package com.cabinet.dto;

public class OrdonnancedetailactemedicaleDTO {
    private int idOrdonnanceDetailActeMedicale;
    private int ordonnanceId;
    private int acteMedicaleId;
    private String traitements;

    public OrdonnancedetailactemedicaleDTO(int idOrdonnanceDetailActeMedicale, int ordonnanceId, int acteMedicaleId, String traitements) {
        this.idOrdonnanceDetailActeMedicale = idOrdonnanceDetailActeMedicale;
        this.ordonnanceId = ordonnanceId;
        this.acteMedicaleId = acteMedicaleId;
        this.traitements = traitements;
    }

    public int getIdOrdonnanceDetailActeMedicale() { return idOrdonnanceDetailActeMedicale; }
    public void setIdOrdonnanceDetailActeMedicale(int id) { this.idOrdonnanceDetailActeMedicale = id; }
    public int getOrdonnanceId() { return ordonnanceId; }
    public void setOrdonnanceId(int ordonnanceId) { this.ordonnanceId = ordonnanceId; }
    public int getActeMedicaleId() { return acteMedicaleId; }
    public void setActeMedicaleId(int acteMedicaleId) { this.acteMedicaleId = acteMedicaleId; }
    public String getTraitements() { return traitements; }
    public void setTraitements(String traitements) { this.traitements = traitements; }
} 