package com.cabinet.repository;

import com.cabinet.entity.Symptom;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SymptomRepository extends CrudRepository<Symptom, Long> {}
