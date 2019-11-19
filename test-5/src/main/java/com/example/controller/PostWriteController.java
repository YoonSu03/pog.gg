package com.example.controller;


import javax.servlet.http.HttpSession;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import org.hibernate.validator.cfg.context.ReturnValueConstraintMappingContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Freeboard;
import com.example.model.Highlightboard;
import com.example.model.Teamboard;
import com.example.model.Users;
import com.example.repository.FreeboardRepository;
import com.example.repository.HighlightRepository;
import com.example.repository.TeamRepository;
import com.example.service.Borad.FreeboardInfoService;
import com.example.service.Borad.FreeboardListService;
import com.example.token.Co_Token;
import com.example.token.InvalidJwtAuthenticationException;

@CrossOrigin
@RestController
public class PostWriteController{
	
	
	
	
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
		LocalDate date =LocalDate.now();
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
	
		
		return teamboardRepository.save(param);
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
	
	
}