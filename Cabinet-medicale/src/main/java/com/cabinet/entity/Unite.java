package com.cabinet.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Unite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id_Unite;
    String value;

    public Unite() {}

    public Unite(String value) {
        setValue(value);
    }

    public Long getId_Unite() {
        return id_Unite;
    }

    public void setId_Unite(Long id_Unite) {
        this.id_Unite = id_Unite;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
