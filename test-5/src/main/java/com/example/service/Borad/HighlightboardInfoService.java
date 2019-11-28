package com.example.service.Borad;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Highlightboard;
import com.example.repository.HighlightRepository;



@Service
public class HighlightboardInfoService {

	@Autowired
	private HighlightRepository HighlightboardRepository;
	
	@Autowired
	private HttpSession session;
	
	public Highlightboard getHighlightboardPost(Long freeId) {
	//	Long freeId = Long.parseLong(stringFreeId);
		Highlightboard highlightboard = HighlightboardRepository.findByFreeId(freeId);
		if(highlightboard == null) {
			return highlightboard;
		}
		session.setAttribute("highlightboard", highlightboard);
		return highlightboard;
	}
}
