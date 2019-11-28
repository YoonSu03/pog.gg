package com.example.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Comment;
import com.example.model.Freeboard;
import com.example.model.Highlightboard;
import com.example.model.Post;
import com.example.model.Teamboard;
import com.example.repository.CommentRepository;
import com.example.repository.FreeboardRepository;
import com.example.repository.HighlightRepository;
import com.example.repository.TeamRepository;
import com.example.service.Borad.FreeboardInfoService;
import com.example.service.Borad.HighlightboardInfoService;
import com.example.service.Borad.TeamboardInfoService;

@CrossOrigin
@RestController
public class InfoController {

	@Autowired
	private HighlightboardInfoService highlightboardInfoService;
	
	@Autowired
	private TeamboardInfoService teamboardInfoService;
	
	@Autowired
	private FreeboardInfoService tipboardInfoService;
	
	@Autowired
    CommentRepository repository;
	
	@Autowired
	private FreeboardRepository freeboardRepository;
	
	@Autowired
	private TeamRepository teamRepository;

	@Autowired
	private HighlightRepository highlightRepository;

	public Post setting(Long freeId, int postType){
		Post post = new Post();
		

		if(postType==1) {
		Freeboard info = tipboardInfoService.getFreeboardPost(freeId);
		post.setBoard(info);
		
		List<Comment> comments = repository.findByFreeIdAndPostTypeOrderByRegDateDesc(freeId,1);
		post.setComments(comments);
		}else if(postType ==2) {
			Teamboard info = teamboardInfoService.getTeamboardPost(freeId);
			post.setBoard(info);
			
			List<Comment> comments = repository.findByFreeIdAndPostTypeOrderByRegDateDesc(freeId,2);
			post.setComments(comments);
		}else if(postType ==3){
			Highlightboard info = highlightboardInfoService.getHighlightboardPost(freeId);
			post.setBoard(info);
			
			List<Comment> comments = repository.findByFreeIdAndPostTypeOrderByRegDateDesc(freeId,3);
			post.setComments(comments);
		}
		
		return post;
	}
	
	@GetMapping("/postInfo")
	public Post getPost(@RequestParam(value = "freeId") String freeid,
						@RequestParam(value = "postType")int posttype)
	{
		Long freeId = Long.parseLong(freeid);
		Post post = setting(freeId, posttype);
		
		return post;
	}
	
	@PatchMapping("/tipboardUpdateRequest")
	public Post tipboardUpdateRequest(@RequestBody Freeboard origin) {
		Freeboard freeboard = freeboardRepository.findByFreeId(origin.getFreeId());
		freeboard.setContent(origin.getContent());
		freeboard.setTitle(origin.getTitle());
		freeboard.setChampion(origin.getChampion());
		freeboardRepository.save(freeboard);
		
		Post post = setting(origin.getFreeId(), 1);
		return post;
	}
	
	@PatchMapping("/teamboardUpdateRequest")
	public Post teamboardUpdateRequest(@RequestBody Teamboard origin) {
		Teamboard teamboard = teamRepository.findByFreeId(origin.getFreeId());
		teamboard.setContent(origin.getContent());
		teamboard.setTitle(origin.getTitle());
		teamboard.setTeamName(origin.getTeamName());
		teamRepository.save(teamboard);
		
		Post post = setting(origin.getFreeId(), 2);
		return post;
	}
	
	@PatchMapping("/highlightboardUpdateRequest")
	public Post highlightboardUpdateRequest(@RequestBody Highlightboard origin) {
		Highlightboard highlightboard = highlightRepository.findByFreeId(origin.getFreeId());
		highlightboard.setLink(origin.getLink());
		highlightRepository.save(highlightboard);
		
		Post post = setting(origin.getFreeId(), 3);
		return post;
	}
	
	@PatchMapping("/commentUpdate")
	public Post commentUpdate(@RequestBody Comment origin) {
		Comment comment = repository.findByCommentId(origin.getComment_id());
		comment.setContent(origin.getContent());
		repository.save(comment);
		
		Post post = setting(origin.getFreeId(),origin.getpostType());
		return post;
	}
}
