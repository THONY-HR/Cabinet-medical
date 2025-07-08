package com.cabinet.entity;
import jakarta.persistence.*;

@Entity
public class Actemedicale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id_acte_medicale;

    String acte_medicale;

    public Actemedicale(){}
    public Actemedicale(String acte)
    {this.acte_medicale=acte;}

    public int getId_acte_medicale()
    {return id_acte_medicale;}

    public String getActe_medicale()
    {return acte_medicale;}

    public void setId_acte_medicale(int id)
    {this.id_acte_medicale=id;}

    public void setActe_medicale(String acte)
    {this.acte_medicale=acte;}
}
