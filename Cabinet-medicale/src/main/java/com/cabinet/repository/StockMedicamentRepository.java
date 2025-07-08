package com.cabinet.repository;

import com.cabinet.entity.StockMedicament;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockMedicamentRepository extends CrudRepository<StockMedicament, Long> {} 