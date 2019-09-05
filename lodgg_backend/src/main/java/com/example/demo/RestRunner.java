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
    String api_key = "RGAPI-5831e675-9b6a-4863-8cc2-8de270e04162";
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
    public String userleagueFirst(@RequestParam String encryptedSummonerId) throws InterruptedException {
        RestTemplate restTemplate = restTemplateBuilder.build();
        String helloResult = restTemplate.getForObject("https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/" + encryptedSummonerId +  "?api_key=" + api_key, String.class);
        System.out.println(helloResult);

        return helloResult;
    }
    @GetMapping("/userleaguesSecond")
    public String userleagueSecond(@RequestParam String leagueId) throws InterruptedException {
        RestTemplate restTemplate = restTemplateBuilder.build();
        String helloResult = restTemplate.getForObject("https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/" + leagueId +  "?api_key=" + api_key, String.class);
        System.out.println(helloResult);

        return helloResult;
    }
}
