package com.cabinet.repository;

import com.cabinet.entity.Ordonnancedetailmedicament;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdonnancedetailmedicamentRepository extends CrudRepository<Ordonnancedetailmedicament, Integer> {}