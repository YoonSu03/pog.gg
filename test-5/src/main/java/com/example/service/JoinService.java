package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.model.Users;
import com.example.repository.UsersRepository;

@Service
public class JoinService {

	@Autowired
	private UsersRepository usersRepository;
	@Autowired
	private UserPasswordHashClass userPasswordHashClass;
	
	public String joinUser(String userId, String userPw, String userName) {
		
		Users user= new Users();
		user = usersRepository.findByUserid(userId);
		
		if(userId.equals("")||userPw.equals("")||userName.equals("")) {
			return "join";
		}
		else if(user != null) {
			return "join";
		}
			
		Users users = new Users();
		users.setUserid(userId);
		String hashedPassword = userPasswordHashClass.getSHA256(userPw);
		
		users.setPassword(hashedPassword);
		users.setUsername(userName);

		
		usersRepository.save(users);
		
		return "login";
	}

}
