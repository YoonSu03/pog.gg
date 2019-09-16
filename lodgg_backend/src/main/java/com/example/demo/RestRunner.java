package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletResponse;

@CrossOrigin(origins = "*")
@RestController
public class RestRunner {
    String api_key = "RGAPI-50ec5a65-4189-4e23-8f67-0b5f6598a30f";
    @Autowired
    RestTemplateBuilder restTemplateBuilder;

    @GetMapping("/userinfo")
    public String userinfo(@RequestParam String name) throws InterruptedException {
        RestTemplate restTemplate = restTemplateBuilder.build();
        String helloResult = restTemplate.getForObject("https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + name + "?api_key=" + api_key, String.class);
        System.out.println(helloResult);

        return helloResult;
    }
    @GetMapping("/userleaguesFirst")
    public String userleaguesFirst(@RequestParam String encryptedSummonerId) throws InterruptedException {
        RestTemplate restTemplate = restTemplateBuilder.build();
        String helloResult = restTemplate.getForObject("https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/" + encryptedSummonerId +  "?api_key=" + api_key, String.class);
        System.out.println(helloResult);

        return helloResult;
    }
    @GetMapping("/matchlists")
    public String matchlists(@RequestParam String encryptedSummonerId) throws InterruptedException {
        RestTemplate restTemplate = restTemplateBuilder.build();
        String helloResult = restTemplate.getForObject("https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/" + encryptedSummonerId + "?endIndex=10&" + "api_key=" + api_key, String.class);
        System.out.println(helloResult);

        return helloResult;
    }
    @GetMapping("/matches")
    public String matches(@RequestParam String matchId) throws InterruptedException {
        RestTemplate restTemplate = restTemplateBuilder.build();
        String helloResult = restTemplate.getForObject("https://kr.api.riotgames.com/lol/match/v4/matches/" + matchId + "?api_key=" + api_key, String.class);
        System.out.println(helloResult);

        return helloResult;
    }
}
