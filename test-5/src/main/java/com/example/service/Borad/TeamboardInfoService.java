package com.example.service.Borad;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Teamboard;
import com.example.repository.TeamRepository;



@Service
public class TeamboardInfoService {

	@Autowired
	private TeamRepository teamboardRepository;
	
	@Autowired
	private HttpSession session;
	
	public Teamboard getTeamboardPost(Long freeId) {
	//	Long freeId = Long.parseLong(stringFreeId);
		Teamboard teamboard = teamboardRepository.findByFreeId(freeId);
		if(teamboard == null) {
			return teamboard;
		}
		teamboard.setViewCount();
		teamboardRepository.save(teamboard);
		session.setAttribute("teamboard", teamboard);
		return teamboard;
	}
}
