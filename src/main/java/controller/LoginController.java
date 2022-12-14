package controller;


import lombok.extern.log4j.Log4j2;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import dto.CustomUserDetails;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


@Controller
@Log4j2
public class LoginController {

    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
    @GetMapping("/login")
    public String getlogin(){
        logger.info("login get");
        return "login";
    }

    @GetMapping("/login_success")
    public String login_success(HttpServletRequest request){
        logger.info("login success get!");
        HttpSession httpSession = request.getSession();
        //CustomUserDetails userDetails = (CustomUserDetails) httpSession.getAttribute("userinfo");
        //logger.info("login success : {}, {}", httpSession.getId(), httpSession.getAttribute("userinfo"));
        logger.info("login success : {}, {}", httpSession.getId(), SecurityContextHolder.getContext().getAuthentication().getDetails());

        return "/login_success";
    }
}
