package com.cabinet.repository;

import com.cabinet.entity.Unite;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UniteRepository extends CrudRepository<Unite, Long> {}
