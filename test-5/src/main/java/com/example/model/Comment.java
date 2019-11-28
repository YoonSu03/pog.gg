package com.example.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Comment {

	public Comment(){
    }

    public Comment(int posttype,int recommended, LocalDateTime reg_date, String content, String writer, Long freeid) {
    	this.postType = posttype;
    	this.recommended = recommended;
        this.regDate = reg_date;
        this.content = content;
        this.writer = writer;
        this.freeId = freeid;
     }

    private int postType;
    private int recommended=0;
    @Column(name = "reg_date")
    private LocalDateTime regDate;
    private String content;
    private String writer;
    private Long freeId;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "comment_id")
    private Long commentId;


    public int getpostType() {
		return postType;
	}
    
    public void setposttype(int posttype) {
		this.postType = posttype;
	}
    
    public Long getFreeId() {
        return freeId;
    }

    public void setFreeId(Long freeid) {
        this.freeId = freeid;
    }

    public Long getComment_id() {
        return commentId;
    }

    public void setComment_id(Long comment_id) {
        this.commentId = comment_id;
    }

    public int getRecommended() {
        return recommended;
    }

    public void setRecommended(int recommended) {
        this.recommended += recommended;
    }

    public LocalDateTime getReg_date() {
        return regDate;
    }

    public void setReg_date(LocalDateTime reg_date) {
        this.regDate = reg_date;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }
}
