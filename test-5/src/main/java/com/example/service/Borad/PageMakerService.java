package com.example.service.Borad;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.example.model.Freeboard;
import com.example.model.Teamboard;
import com.example.pageMaker.PageMaker;

@Service
public class PageMakerService {

	public <T> PageMaker generatePageMaker(int pageNum, int contentNum,JpaRepository<T, Long> repository) {
		PageMaker pageMaker = new PageMaker();
		
		int totalCount = (int)repository.count();
		pageMaker.setTotalCount(totalCount);
		pageMaker.setPageNum(pageNum-1);
		pageMaker.setContentNum(contentNum);
		pageMaker.setCurrentBlock(pageNum);
		pageMaker.setLastblock(pageMaker.getTotalCount());
		pageMaker.prevNext(pageNum);
		pageMaker.setStartPage(pageMaker.getCurrentBlock());
		pageMaker.setEndPage(pageMaker.getLastblock(), pageMaker.getCurrentBlock());
		
		return pageMaker;
	}

}
