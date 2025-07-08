package com.cabinet.entity;

import jakarta.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_user;

    private String name;
    private String password;
    private int roleuser_id;

    public User() {}

    public User(int id_user, String name, String password, int roleUser_id) {
        this.id_user = id_user;
        this.name = name;
        this.password = password;
        this.roleuser_id = roleUser_id;
    }

    public int getId_user() {
        return id_user;
    }

    public void setId_user(int id_user) {
        this.id_user = id_user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getRoleUser_id() {
        return roleuser_id;
    }

    public void setRoleUser_id(int roleUser_id) {
        this.roleuser_id = roleUser_id;
    }
}
