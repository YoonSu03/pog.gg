package com.example.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Freeboard;

@Repository
public interface FreeboardRepository extends JpaRepository<Freeboard, Long>{
	Freeboard findByFreeId(Long freeId);
	Page<Freeboard> findByChampion(String Champion,Pageable page);

}
