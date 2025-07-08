package com.cabinet.repository;

import com.cabinet.entity.Symptomconsultation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SymptomconsultationRepository extends CrudRepository<Symptomconsultation, Integer> {}