package com.cabinet.repository;

import com.cabinet.entity.Parameterpatient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParameterpatientRepository extends CrudRepository<Parameterpatient, Integer> {}