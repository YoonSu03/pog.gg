package com.example.token;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import com.example.model.Users;


public class Co_Token {

	private String token;

	
	//��ū ����
    public String createCoToken(Users user) { //�Ķ���� String id
        String key = Base64.getEncoder().encodeToString("key".getBytes());

        Map<String, Object> headers = new HashMap<>();
        headers.put("typ", "JWT");
        headers.put("alg", "HS256");

        Map<String, Object> payloads = new HashMap<>();
        long expiredTime = 1000 * 60 * 60 * 24 * 7L;

        Date now = new Date();
        now.setTime(now.getTime() + expiredTime);
        payloads.put("exp", now);
       // payloads.put("data", id);
        payloads.put("userid", user.getUserid());
        payloads.put("userpw", user.getPassword());
        payloads.put("username", user.getUsername());
        
        return Jwts.builder()
                .setHeader(headers)
                .setClaims(payloads)
                .signWith(SignatureAlgorithm.HS256, key.getBytes())
                .compact();
    }

    
    public String getToken() {
    	return this.token;
    }
    //���� �� ������ ��ȯ ������ü�� ��ȯ �⺻ ��Ʈ�� ��ȯ �Ķ���� String token throws InvalidJwtAuthenticationException
    public Users verifyToken(String token) throws InvalidJwtAuthenticationException {
        String key = Base64.getEncoder().encodeToString(Base64.getEncoder().encodeToString("key".getBytes()).getBytes());
        JwtParser jwtParser = Jwts.parser();
        Claims claims = jwtParser
                .setSigningKey(key)
                .parseClaimsJws(token)
                .getBody();

        Date exp = claims.getExpiration();
        Date now = new Date();
        Users user = new Users();
        if (exp.after(now)) {
            //return claims.get("data", String.class);
        	String id = claims.get("userid", String.class);
        	String pw = claims.get("userpw", String.class);
        	String name = claims.get("username", String.class);
        	user.setUserid(id);
        	user.setPassword(pw);
        	user.setUsername(name);
        	//System.out.println(user.getUserid());
            return user;
        } 
        else {
            throw new InvalidJwtAuthenticationException("Expired or invalid JWT token");
        }
    }

    public Co_Token(Users co_user) {
        token = this.createCoToken(co_user);
    	//token = this.createCoToken(co_user);//������ü ��ü �ѱ�
    }

    public Co_Token() {

    }

   // public Map<Object, Object> getTokenResponse() {
   //     Map<Object, Object> model = new HashMap<>();
   //     model.put("token", this.token);

   //     return model;
   // }

}
