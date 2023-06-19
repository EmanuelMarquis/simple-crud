package com.emanuelmarquis.crudapp;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ICubeRepo extends JpaRepository<Cube, Long> {}