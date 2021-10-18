package com.jing.utswTask.services;

import com.jing.utswTask.models.User;
import com.jing.utswTask.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    RegistrationRepository registrationRepository;

    public User saveUser(User user){
        return registrationRepository.save(user);
    }

    public User fetchUserByEmail(String email){
        return registrationRepository.findByEmail(email);
    }

    public User fetchUserByUserName(String username){
        return registrationRepository.findByUsername(username);
    }

    public User fetchUserByUserNameAndPassword(String username, String pass){
        return registrationRepository.findByUsernameAndPassword(username, pass);
    }

    public User fetchUserByEmailAndPassword(String tmpEmail, String tmpPassword) {
        return registrationRepository.findByEmailAndPassword(tmpEmail, tmpPassword);
    }

    public List<User> fetchUserByUsertype(String usertype) {
        return registrationRepository.findAllByUsertype(usertype);
    }
}
