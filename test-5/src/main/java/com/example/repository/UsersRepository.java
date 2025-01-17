package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
	Users findByUseridAndPassword(String userId, String userPw);
	Users findByUserid(String userId);
}
