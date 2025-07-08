package com.cabinet.repository;

import com.cabinet.entity.Consultation;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultationRepository extends CrudRepository<Consultation, Integer> {}