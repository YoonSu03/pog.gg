package com.example.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Highlightboard;

@Repository
public interface HighlightRepository extends JpaRepository<Highlightboard, Long>{
	Highlightboard findByFreeId(Long freeId);

	Page<Highlightboard> findByCategory(int category,Pageable page);


}
