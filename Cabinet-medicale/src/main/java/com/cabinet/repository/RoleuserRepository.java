package com.cabinet.repository;

import com.cabinet.entity.Roleuser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleuserRepository extends CrudRepository<Roleuser, Integer> {}
