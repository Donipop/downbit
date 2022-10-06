package repository;

import controller.LoginController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.List;

public class CustomAuthenticationProvide implements AuthenticationProvider {

    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {

        String username = authentication.getName();
        String password = (String) authentication.getCredentials();

        logger.info("username : {}, password : {}", username, password);
        List<GrantedAuthority> roles = new ArrayList<>();
        roles.add((new SimpleGrantedAuthority("ROLE_USER")));
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(username,password,roles);
        token.setDetails(new CustomUserDetails(username,password));

        logger.info("token : {}", token);
        return token;
    }

    @Override
    public boolean supports(Class<?> aClass) {
        return aClass.equals(UsernamePasswordAuthenticationToken.class);
    }
}
