package com.cabinet.repository;

import com.cabinet.entity.Informationpersonnelle;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InformationpersonnelleRepository extends CrudRepository<Informationpersonnelle, Integer> {}