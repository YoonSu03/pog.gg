package com.example.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "highlightboard")
public class Highlightboard extends Board{


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long freeId;
	private String link;
	private int category;
	private String writer;
	private int commentCount=0;
	private int voteCount=0;
	private LocalDateTime date;

	public Long getFreeId() {
		return freeId;
	}
	public void setFreeId(Long freeId) {
		this.freeId=freeId;
	}
	public String getLink()
	{
		return link;
	}
	public void setLink(String content) {
		this.link=content;
	}
	public int getCategory() {
		return category;
	}
	public void setCategory(int category) {
		this.category=category;
	}
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer=writer;
	}
	public LocalDateTime getDate() {
		return date;
	}
	public void setDate(LocalDateTime date) {
		this.date=date;
	}
	
	public int getCommentCount() {
		return commentCount;
	}
	
	public void setCommentCount() {
		this.commentCount++;
	}
	
	public int getVoteCount() {
		return voteCount;
	}
	
	public void setVoteCount(int voteCount) {
		this.voteCount += voteCount;
	}
	
	
	
}
