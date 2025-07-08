package com.cabinet.repository;

import com.cabinet.entity.Infopatient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InfopatientRepository extends CrudRepository<Infopatient, Integer> {}