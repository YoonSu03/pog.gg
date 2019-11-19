package com.example.service.Borad;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.model.Freeboard;
import com.example.pageMaker.PageMaker;
import com.example.repository.FreeboardRepository;

@Service
public class FreeboardListService {

	@Autowired
	private FreeboardRepository freeboardRepository;
	
	@Autowired
	private HttpSession session;
	
	@Autowired
	private PageMakerService pageMakerService;
	
	
	public List<Freeboard> freeboardList(int pageNum,String way){
		
		PageMaker pageMaker =  pageMakerService.generatePageMaker(pageNum, 10, freeboardRepository);
		
		PageRequest pageRequest = PageRequest.of(pageNum-1, 10, Sort.Direction.DESC, way);
		Page<Freeboard> freeboardPage = freeboardRepository.findAll(pageRequest);
		

		System.out.print(freeboardPage.getContent());
		if(freeboardPage.getSize()==0) {
			session.setAttribute("boardList", new ArrayList<Freeboard>());
			session.setAttribute("pageMaker", pageMaker);
			return new ArrayList<Freeboard>();
			
		}
		List<Freeboard> freeboardList = freeboardPage.getContent();
		
		session.setAttribute("boardList", freeboardList);
		session.setAttribute("pageMaker", pageMaker);
		System.out.print(freeboardList);
		return freeboardList; 
	}
}
