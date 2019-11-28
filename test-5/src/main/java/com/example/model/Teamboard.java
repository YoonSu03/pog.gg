package com.example.model;

import java.io.IOException;
import java.io.InputStream;
import java.sql.SQLException;
import java.sql.Blob;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.hibernate.Hibernate;


@Entity
@Table(name = "teamboard")
public class Teamboard extends Board{

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long freeId;
	private String content;
	//@Lob
    //@Column(name = "content", columnDefinition="BLOB")
    //private byte[] blob;
	private String title;
	private String writer;
	private int viewCount=0;
	private int voteCount=0;
	private LocalDateTime date;
	private String teamName;
	private int commentCount=0;

	public Long getFreeId() {
		return freeId;
	}
	public void setFreeId(Long freeId) {
		this.freeId=freeId;
	}
	//public byte[] getBlob() {
	//	return blob;
	//}
	//public void setBlob(byte[] blob) {
	//	this.blob = blob;
	//}
	
	//public InputStream getPhotoContent() throws SQLException { 
	//	if (getBlob() == null) {
	//		return null; 
	//	} 
	//	return getBlob().getBinaryStream(); 
	//}
	//public void setPhotoContent(InputStream sourceStream) throws IOException {
	//	setBlob(Hibernate.createBlob(sourceStream));
	//	}


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
	public int getCommentCount() {
		return commentCount;
	}
	
	public void setCommentCount() {
		this.commentCount++;
	}
}
