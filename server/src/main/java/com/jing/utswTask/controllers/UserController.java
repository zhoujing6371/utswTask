package com.jing.utswTask.controllers;

import com.jing.utswTask.models.User;
import com.jing.utswTask.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@CrossOrigin(origins="http://localhost:4200")
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/registeruser")
    @CrossOrigin(origins="http://localhost:4200")
    public User registerUser(@RequestBody User user) throws Exception {
        String tmpEmail = user.getEmail();
        String tmpUserName = user.getUsername();
        if(tmpEmail != null && !"".equals(tmpEmail)){
            User userObj = userService.fetchUserByEmail(tmpEmail);
            if(userObj != null){
                throw new Exception("User with " + tmpEmail + " is already exist");
            }
            User userObj1 = userService.fetchUserByUserName(tmpUserName);
            if(userObj1 != null){
                throw new Exception("User with " + tmpUserName + " is already exist");
            }
        }
        User userObj = null;
        userObj = userService.saveUser(user);
        return userObj;
    }

    @PostMapping("/loginuser")
    @CrossOrigin(origins="http://localhost:4200")
    public User loginUser(@RequestBody User user) throws Exception {
        String tmpUsername = user.getUsername();
        String tmpEmail = user.getEmail();
        String tmpPassword = user.getPassword();
        User userObj = null;
        if(tmpUsername != null && tmpPassword != null){
            userObj = userService.fetchUserByEmailAndPassword(tmpEmail, tmpPassword);
        }
        if(userObj==null){
            throw new Exception("Bad credentials");
        }
        return userObj;
    }

    @PostMapping("/listAllUsersByType")
    @CrossOrigin(origins="http://localhost:4200")
    public List<User> listAllUsersByType(@RequestBody String usertype) throws Exception {
        List<User> userObjs = null;
        if(usertype != null ){
            userObjs = userService.fetchUserByUsertype(usertype);
        }
        return userObjs;
    }

}
