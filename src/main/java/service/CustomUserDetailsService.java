package service;

import dto.CustomUserDetails;
import dto.USER;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import repository.UserDaoImpl;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    private static final Logger logger = LoggerFactory.getLogger(CustomUserDetailsService.class);

    private final UserDaoImpl userDao;
    private final PasswordEncoder passwordEncoder;


    @Autowired
    public CustomUserDetailsService(UserDaoImpl userDao, PasswordEncoder passwordEncoder) {
        this.userDao = userDao;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        logger.info("loadUserByUsername : {}", username);        USER u = userDao.findUserByusername(username);
        CustomUserDetails customUserDetails = new CustomUserDetails(u.getUsername(),passwordEncoder.encode("{noop}"+u.getUserpassword()), u.getUsernick());
        return customUserDetails;
    }
}
