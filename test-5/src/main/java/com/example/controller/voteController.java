package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Freeboard;
import com.example.model.Highlightboard;
import com.example.model.Teamboard;
import com.example.repository.FreeboardRepository;
import com.example.repository.HighlightRepository;
import com.example.repository.TeamRepository;

@CrossOrigin
@RestController
public class voteController {
	
	@Autowired
	private FreeboardRepository freeboardRepository;
	
	@Autowired
	private TeamRepository teamRepository;

	@Autowired
	private HighlightRepository highlightRepository;
	
	@PatchMapping("/voteRequest")
	@ResponseStatus(HttpStatus.OK)
	public void voteRequest(@RequestParam(value = "freeId") Long freeid,
							@RequestParam(value = "voteCount") int votecount,
							@RequestParam(value = "postType")int posttype) {
		if(posttype==1) {
		Freeboard freeboard = freeboardRepository.findByFreeId(freeid);
		freeboard.setVoteCount(votecount);
		freeboardRepository.save(freeboard);
		}else if(posttype ==2 ) {
			Teamboard teamboard = teamRepository.findByFreeId(freeid);
			teamboard.setVoteCount(votecount);
			teamRepository.save(teamboard);
		}else if(posttype ==3) {
			Highlightboard teamboard = highlightRepository.findByFreeId(freeid);
			teamboard.setVoteCount(votecount);
			highlightRepository.save(teamboard);
		}
		System.out.println("//////////////////////");
	}
}
