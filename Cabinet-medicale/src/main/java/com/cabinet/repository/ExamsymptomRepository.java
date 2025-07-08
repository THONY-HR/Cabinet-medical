package com.cabinet.repository;

import com.cabinet.entity.Examsymptom;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExamsymptomRepository extends CrudRepository<Examsymptom, Integer> {
}
