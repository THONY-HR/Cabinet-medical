package com.cabinet.repository;

import com.cabinet.entity.Actemedicale;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActemedicaleRepository extends CrudRepository<Actemedicale, Integer> {}
