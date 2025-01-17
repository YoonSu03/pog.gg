package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Users;
import com.example.repository.UsersRepository;

import javax.servlet.http.HttpSession;

@Service
public class LoginService {
	
	@Autowired
	private UserPasswordHashClass userPasswordHashClass;
	
	@Autowired
	private UsersRepository usersRepository;

	@Autowired
	HttpSession session;

	public String login(String userId, String userPw) {
		if(userId.equals("")||userPw.equals("")) {
			return "login";
		}
		
		String hashedPassword = userPasswordHashClass.getSHA256(userPw);
		
		Users users =usersRepository.findByUseridAndPassword(userId, hashedPassword);
		if(users == null) {
			return "login";
		}
		String user =users.getUsername();
		
	
		session.setAttribute( user, users);
		
		return user;
	}

}
