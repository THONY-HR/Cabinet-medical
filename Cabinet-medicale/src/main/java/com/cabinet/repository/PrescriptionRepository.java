package com.cabinet.repository;

import com.cabinet.entity.Prescription;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrescriptionRepository extends CrudRepository<Prescription, Integer> {} 