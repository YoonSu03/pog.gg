package com.example.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "teamboard")
public class Teamboard extends Board{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long freeId;
	private String content;
	private String title;
	private String writer;
	private int viewCount=0;
	private int voteCount=0;
	private LocalDateTime date;
	private String teamName;

	public Long getFreeId() {
		return freeId;
	}
	public void setFreeId(Long freeId) {
		this.freeId=freeId;
	}
	public String getContent()
	{
		return content;
	}
	public void setContent(String content) {
		this.content=content;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title=title;
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
	
	public int getViewCount() {
		return viewCount;
	}
	
	public void setViewCount() {
		this.viewCount++;
	}
	
	public int getVoteCount() {
		return voteCount;
	}
	
	public void setVoteCount(int voteCount) {
		this.voteCount += voteCount;
	}
	
	public String getTeamName() {
		return teamName;
	}
	
	public void setTeamName(String teamName) {
		this.teamName = teamName;
	}
}
