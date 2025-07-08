package com.cabinet.repository;

import com.cabinet.entity.Vitalparameter;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VitalParameterRepository extends CrudRepository<Vitalparameter, Long> {}
