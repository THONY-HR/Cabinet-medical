package com.cabinet.entity;

import jakarta.persistence.*;

@Entity
public class Informationpersonnelle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_info_personnelle;

    private String information;

    public Informationpersonnelle() {}

    public Informationpersonnelle(String information) {
        this.information = information;
    }

    public int getId_info_personnelle() { return id_info_personnelle; }
    public void setId_info_personnelle(int id_info_personnelle) { this.id_info_personnelle = id_info_personnelle; }
    public String getInformation() { return information; }
    public void setInformation(String information) { this.information = information; }
}
