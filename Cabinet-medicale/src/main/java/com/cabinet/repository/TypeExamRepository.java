package com.cabinet.repository;

import com.cabinet.entity.Typeexam;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeExamRepository extends CrudRepository<Typeexam, Integer> {}
