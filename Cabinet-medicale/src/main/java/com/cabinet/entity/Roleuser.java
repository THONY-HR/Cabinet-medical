package com.cabinet.entity;

import jakarta.persistence.*;

@Entity
public class Roleuser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_roleuser;

    private String role;

    public Roleuser() {}

    public Roleuser(int id_roleUser, String role) {
        this.id_roleuser = id_roleUser;
        this.role = role;
    }

    public int getId_roleUser() {
        return id_roleuser;
    }

    public void setId_roleUser(int id_roleUser) {
        this.id_roleuser = id_roleUser;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
