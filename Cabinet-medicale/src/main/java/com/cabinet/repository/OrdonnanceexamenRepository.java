package com.cabinet.repository;

import com.cabinet.entity.Ordonnanceexamen;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdonnanceexamenRepository extends CrudRepository<Ordonnanceexamen, Integer> {
    @Query("SELECT o FROM Ordonnanceexamen o WHERE o.ordonnance_id = :ordonnance_id")
    Iterable<Ordonnanceexamen> findByOrdonnanceId(@Param("ordonnance_id") int ordonnance_id);
}