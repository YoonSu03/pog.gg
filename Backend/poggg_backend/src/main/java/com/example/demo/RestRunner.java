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
    String api_key = "RGAPI-79657b4b-2289-4ca1-9a3e-29ed72cdca29";
    String pandaApi_key = "PSUfNuHCvA21YK-sRwiOKPQ1fK8JqFfZkzcjgcInP3yZ8dasKls";
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
        String helloResult = restTemplate.getForObject("https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/" + encryptedSummonerId + "?endIndex=20&" + "api_key=" + api_key, String.class);
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
    @GetMapping("/leagueExp")
    public String leagueExp(@RequestParam String tier) throws InterruptedException {
        RestTemplate restTemplate = restTemplateBuilder.build();
        String helloResult = restTemplate.getForObject("https://kr.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/" + tier + "/I?api_key=" + api_key, String.class);
        System.out.println(helloResult);

        return helloResult;
    }
    @GetMapping("/esportsMatch")
    public String esportsMatch(@RequestParam String leagueId) throws InterruptedException {
        RestTemplate restTemplate = restTemplateBuilder.build();
        String helloResult = restTemplate.getForObject("https://api.pandascore.co/leagues/"+leagueId +"/series?token="+pandaApi_key, String.class);
        System.out.println(helloResult);

        return helloResult;
    }
}
