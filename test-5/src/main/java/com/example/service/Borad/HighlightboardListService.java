package com.example.service.Borad;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.model.Freeboard;
import com.example.model.Highlightboard;
import com.example.pageMaker.PageMaker;
import com.example.repository.HighlightRepository;

@Service
public class HighlightboardListService {
	
	@Autowired
	private HighlightRepository highlightRepository;
	

	@Autowired
	private HttpSession session;
	
	@Autowired
	private PageMakerService pageMakerService;
	
public List<Highlightboard> highlightboardList(int pageNum,String way, int category){
		
		PageMaker pageMaker =  pageMakerService.generatePageMaker(pageNum, 10, highlightRepository);
		
		PageRequest pageRequest = PageRequest.of(pageNum-1, 10, Sort.Direction.DESC, way);
		
		Page<Highlightboard> highlightboardPage;
		
		if(category == 0) {
			highlightboardPage = highlightRepository.findAll(pageRequest);
		}else if(category == 1){
			highlightboardPage = highlightRepository.findByCategory(1,pageRequest);
		}else if(category == 2){
			highlightboardPage = highlightRepository.findByCategory(2,pageRequest);
		}else{
			highlightboardPage = highlightRepository.findByCategory(3,pageRequest);
		}
		
		
		
		
		//highlightboardPage = highlightRepository.findByCategory(category, pageRequest);
		
		
		if(highlightboardPage.getSize()==0) {
			session.setAttribute("boardList", new ArrayList<Highlightboard>());
			session.setAttribute("pageMaker", pageMaker);
			return new ArrayList<Highlightboard>();			
		}
		
		List<Highlightboard> highlightboardList = highlightboardPage.getContent();
		
		session.setAttribute("boardList", highlightboardList);
		session.setAttribute("pageMaker", pageMaker);
		System.out.print(highlightboardList);
		return highlightboardList;
	}
}
