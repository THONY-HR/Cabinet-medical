package com.cabinet.repository;

import com.cabinet.entity.Phrarmaceuticals;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhrarmaceuticalsRepository extends CrudRepository<Phrarmaceuticals, Long> {}
