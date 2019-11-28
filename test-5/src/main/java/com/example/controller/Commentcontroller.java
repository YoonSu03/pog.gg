package com.example.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Comment;
import com.example.model.Freeboard;
import com.example.model.Highlightboard;
import com.example.model.Teamboard;
import com.example.model.Users;
import com.example.repository.CommentRepository;
import com.example.repository.FreeboardRepository;
import com.example.repository.HighlightRepository;
import com.example.repository.TeamRepository;
import com.example.token.Co_Token;
import com.example.token.InvalidJwtAuthenticationException;

@CrossOrigin
@RestController
@EnableAutoConfiguration
public class Commentcontroller {

	@Autowired
	CommentRepository commentRepository;
	
	@Autowired
	HighlightRepository highlightboardRepository;
	
	@Autowired
	FreeboardRepository freeboardRepository;
	
	@Autowired
	TeamRepository teamboardRepository;
	
	public Users tokenRequest(String token) throws InvalidJwtAuthenticationException {
		Users user= new Users();
		Co_Token i = new Co_Token();
		user = i.verifyToken(token);//객체 반환
		return user;
	}

    @PostMapping("/makeComment")
    public Comment makeComment(@RequestHeader (value = "token")String token ,@RequestBody Comment comment) {
    	LocalDateTime date =LocalDateTime.now();
    	
    	Users user = new Users();
		try {
			user = tokenRequest(token);
		} catch (InvalidJwtAuthenticationException e) {
			e.printStackTrace();
		}
		comment.setWriter(user.getUsername());
    	comment.setReg_date(date);
    	
 
    	Long freeid = comment.getFreeId();
    	if(comment.getpostType() == 1) {
    		Freeboard freeboard = freeboardRepository.findByFreeId(freeid);
        	freeboard.setCommentCount();
        	freeboardRepository.save(freeboard);
        }else if(comment.getpostType() == 2) {
            Teamboard freeboard = teamboardRepository.findByFreeId(freeid);
            freeboard.setCommentCount();
            teamboardRepository.save(freeboard);
        }else if(comment.getpostType() == 3) {
        	Highlightboard freeboard = highlightboardRepository.findByFreeId(freeid);
        	freeboard.setCommentCount();
        	highlightboardRepository.save(freeboard);
    	}
  	
        return commentRepository.save(comment);
    }

    @PatchMapping("/ddabbong")
    public Comment ddabbong(@RequestParam Long comment_id,
    						@RequestParam(value = "voteCount") int votecount) {
        Optional<Comment> optional = commentRepository.findById(comment_id);
        if(!optional.isPresent()){
            //널일 경우
            throw new RuntimeException();
        } else {
            Comment comment = optional.get();
            comment.setRecommended(votecount);
            commentRepository.save(comment);
            return comment;
        }
    }

    @GetMapping("/showByComment_id")
    public List<Comment> showByComment_id(@RequestParam (value = "freeId")Long freeid,@RequestParam (value = "postType")int postType)
    {
        return commentRepository.findByFreeIdAndPostTypeOrderByRegDateDesc(freeid,postType);
    }

    @GetMapping("/showByRecommended")
    public List<Comment> showByRecommended(@RequestParam (value = "freeId")Long freeid,@RequestParam (value = "postType")int postType)
    {
        return commentRepository.findByFreeIdAndPostTypeOrderByRecommendedDesc(freeid,postType);
    }

    @DeleteMapping("/deleteComment")
    public void deleteComment(@RequestParam (value = "commentId") Long commentId){
    	commentRepository.deleteById(commentId);
    	
    }
    
}
