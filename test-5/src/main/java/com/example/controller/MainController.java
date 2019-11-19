package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.hibernate.validator.cfg.context.ReturnValueConstraintMappingContext;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.example.model.Freeboard;
import com.example.service.Borad.FreeboardListService;

import javax.servlet.http.HttpSession;

@CrossOrigin
@Controller
public class MainController {

	
	
	@Autowired
	private HttpSession session;
	
		@RequestMapping(value="/")
		public String index() {
			System.out.println("!");
			return "index";
			
		}
		
		@RequestMapping(value = "/joinPage")
		public String joinPage() {
			return "join";	
		}
		
		@GetMapping("/loginPage")
		public String loginPage() {
			return "login";
		}

		@GetMapping("/logoutPage")
		public String logoutPage() {
			session.invalidate();
			return "index";
		}
		
		
		
		
		
	}

