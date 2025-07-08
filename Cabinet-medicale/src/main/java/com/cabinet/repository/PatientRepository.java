package com.cabinet.repository;

import com.cabinet.entity.Patient;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends CrudRepository<Patient, Integer> {
    List<Patient> findByNomAndPrenom(String nom, String prenom);
}