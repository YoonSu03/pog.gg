package com.example.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.model.Comment;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Long>{
	List<Comment> findByFreeIdAndPostTypeOrderByRegDateDesc(Long freeid, int posttype);
    List<Comment> findByFreeIdAndPostTypeOrderByRecommendedDesc(Long freeid, int posttype);
    List<Comment> deleteByFreeIdAndPostType(Long freeid,int posttype);
    Comment findByCommentId(Long commentId);
}
