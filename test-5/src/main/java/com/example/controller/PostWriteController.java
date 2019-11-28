package com.example.controller;


import javax.servlet.http.HttpSession;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import org.hibernate.validator.cfg.context.ReturnValueConstraintMappingContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Freeboard;
import com.example.model.Highlightboard;
import com.example.model.Teamboard;
import com.example.model.Users;
import com.example.repository.CommentRepository;
import com.example.repository.FreeboardRepository;
import com.example.repository.HighlightRepository;
import com.example.repository.TeamRepository;
import com.example.token.Co_Token;
import com.example.token.InvalidJwtAuthenticationException;

@CrossOrigin
@RestController
public class PostWriteController{
	
	
	@Autowired
	CommentRepository commentRepository;
	
	@Autowired
	FreeboardRepository tipboardRepository;
	
	@Autowired
	TeamRepository teamboardRepository;
	
	@Autowired
	HighlightRepository highlightboardRepository;
		
	public Users tokenRequest(String token) throws InvalidJwtAuthenticationException {
		Users user= new Users();
		Co_Token i = new Co_Token();
		user = i.verifyToken(token);//°´Ã¼ ¹ÝÈ¯
		return user;
	}
	
	@PostMapping("/tipboardWriteRequest")
	public Freeboard tipboardWriteRequest(@RequestHeader (value = "token")String token ,@RequestBody Freeboard param) {
		LocalDateTime date =LocalDateTime.now();
		Users user = new Users();
		try {
			user = tokenRequest(token);
		} catch (InvalidJwtAuthenticationException e) {
			e.printStackTrace();
		}
		param.setDate(date);
		param.setWriter(user.getUsername());
		
		return tipboardRepository.save(param);
	}
	
	
	
	@DeleteMapping("/tipboardDeleteRequest")
	@ResponseStatus(HttpStatus.OK)
	public void tipboardDeleteRequest(@RequestParam (value = "freeid")Long freeId) {
		tipboardRepository.deleteById(freeId);
		commentRepository.deleteByFreeIdAndPostType(freeId,1);
		
	}
	
	@PostMapping("/teamboardWriteRequest")
	public Teamboard teamboardWriteRequest(@RequestHeader (value = "token")String token ,@RequestBody Teamboard param) {
		LocalDateTime date =LocalDateTime.now();
		Users user = new Users();
		try {
			user = tokenRequest(token);
		} catch (InvalidJwtAuthenticationException e) {
			e.printStackTrace();
		}
		param.setDate(date);
		param.setWriter(user.getUsername());
		param.setTeamName(param.getTeamName().toUpperCase());
	
		
		return teamboardRepository.save(param);
	}
	
	@DeleteMapping("/teamboardDeleteRequest")
	@ResponseStatus(HttpStatus.OK)
	public void teamboardDeleteRequest(@RequestParam (value = "freeid")Long freeId) {
		teamboardRepository.deleteById(freeId);
		commentRepository.deleteByFreeIdAndPostType(freeId, 2);
	}
	
	@PostMapping("/highlightboardWriteRequest")
	public Highlightboard highlightboardWriteRequest(@RequestHeader (value = "token")String token ,@RequestBody Highlightboard param) {
		LocalDateTime date =LocalDateTime.now();
		Users user = new Users();
		try {
			user = tokenRequest(token);
		} catch (InvalidJwtAuthenticationException e) {
			e.printStackTrace();
		}
		param.setDate(date);
		param.setWriter(user.getUsername());
		
		return highlightboardRepository.save(param);
	}
	
	@DeleteMapping("/highlightboardDeleteRequest")
	@ResponseStatus(HttpStatus.OK)
	public void highlightboardDeleteRequest(@RequestParam (value = "freeid")Long freeId) {
		highlightboardRepository.deleteById(freeId);
		commentRepository.deleteByFreeIdAndPostType(freeId,3);
	}
	
}