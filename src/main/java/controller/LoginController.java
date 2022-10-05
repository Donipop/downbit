package controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {

    @PostMapping("/login")
    public String login(){
        ModelAndView model = new ModelAndView();

        model.addObject("msg","Login Success");
        model.setViewName("login");
        return "index";
    }
}
