package com.example.model;

import java.util.List;

public  class Post<T extends Board> {

	private T board;
	
	private List<Comment> comments;
	
	public T getBoard() {
		return board;
	}
	
	public void setBoard(T board) {
		this.board = board;
	}
	
	public List<Comment> getComments() {
		return comments;
	}
	
	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}
}
