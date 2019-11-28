package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Freeboard;
import com.example.model.Highlightboard;
import com.example.model.Teamboard;
import com.example.service.Borad.FreeboardListService;
import com.example.service.Borad.HighlightboardListService;
import com.example.service.Borad.TeamboardListService;

@CrossOrigin
@RestController
public class PostListController {

	@Autowired
	private HighlightboardListService highlightboardListService;

	@Autowired
	private FreeboardListService freeboardListService;
	
	@Autowired
	private TeamboardListService teamboardListService;
	
	@GetMapping("/tipboard") 
	public List<Freeboard> freeboard(@RequestParam(value = "pageNum") int pageNum, 
									@RequestParam(value = "way",defaultValue = "freeId") String way,
									@RequestParam(value = "champion",defaultValue = "all") String champion) {
		List<Freeboard> freeboardList = freeboardListService.freeboardList(pageNum,way,champion);
		return freeboardList;
	}
	
	
	@GetMapping("/teamboard") 
	public List<Teamboard> teamboard(@RequestParam(value = "pageNum") int pageNum, 
									@RequestParam(value = "way",defaultValue = "freeId") String way,
									@RequestParam(value = "teamName",defaultValue = "all") String teamName) {
		List<Teamboard> teamboardList = teamboardListService.teamboardList(pageNum,way,teamName);
		return teamboardList;
		
//		return teamboardListService.teamboardList(pageNum, way, teamName);
	}
	
	@GetMapping("/highlightboard") 
	public List<Highlightboard> teamboard(@RequestParam(value = "pageNum") int pageNum,
											@RequestParam(value = "way",defaultValue = "freeId") String way, 
											@RequestParam(value = "category", defaultValue = "0")int category) {
		System.out.println(category);
		List<Highlightboard> teamboardList = highlightboardListService.highlightboardList(pageNum,way,category);
		return teamboardList;
	}

}
