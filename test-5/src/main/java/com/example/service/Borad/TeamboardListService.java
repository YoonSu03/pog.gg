package com.example.service.Borad;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.model.Freeboard;
import com.example.model.Teamboard;
import com.example.pageMaker.PageMaker;
import com.example.repository.TeamRepository;

@Service
public class TeamboardListService {

	@Autowired
	private TeamRepository teamRepository;
	
	@Autowired
	private HttpSession session;
	
	@Autowired
	private PageMakerService pageMakerService;
	
public List<Teamboard> teamboardList(int pageNum,String way,String teamName){
		
		PageMaker pageMaker =  pageMakerService.generatePageMaker(pageNum, 10, teamRepository);
		
		PageRequest pageRequest = PageRequest.of(pageNum-1, 10, Sort.Direction.DESC, way);
		
		Page<Teamboard> teamboardPage;
		
		if(teamName.equalsIgnoreCase("all")) {
			teamboardPage = teamRepository.findAll(pageRequest);
		}else{
			teamboardPage = teamRepository.findByTeamName(teamName,pageRequest);
		}
		
		if(teamboardPage.getSize()==0) {
			session.setAttribute("boardList", new ArrayList<Teamboard>());
			session.setAttribute("pageMaker", pageMaker);
			return new ArrayList<Teamboard>();

		}
		
		List<Teamboard> teamboardList = teamboardPage.getContent();
		
		session.setAttribute("boardList", teamboardList);
		session.setAttribute("pageMaker", pageMaker);
		System.out.print(teamboardList);
		return teamboardList;
	}
}
