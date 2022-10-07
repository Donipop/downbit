package controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.security.Principal;

@Controller
public class IndexController {

    private static final Logger LOGGER = LoggerFactory.getLogger(IndexController.class);
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String getindex(Principal principal){
        LOGGER.info("GET INDEX");
        LOGGER.info(principal.getName());

        return "index";
    }

}
