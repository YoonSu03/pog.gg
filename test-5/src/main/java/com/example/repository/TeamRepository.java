package com.example.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Teamboard;

@Repository
public interface TeamRepository extends JpaRepository<Teamboard, Long>{

	Teamboard findByFreeId(Long freeId);
	
	Page<Teamboard> findByTeamName(String TeamName,Pageable page);
}
