package com.cabinet.repository;

import com.cabinet.entity.Ordonnancedetailactemedicale;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdonnancedetailactemedicaleRepository extends CrudRepository<Ordonnancedetailactemedicale, Integer> {} 