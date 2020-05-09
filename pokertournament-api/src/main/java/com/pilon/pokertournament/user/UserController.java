package com.pilon.pokertournament.user;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(path="/{id}")
    User getUser(@PathVariable("id") String id) {
        Optional<User> user = userService.findById(id);
        if (user.isPresent()) {
            return user.get();
        } else {
            throw new ResourceNotFoundException(); 
        }
    }

    @GetMapping(path="/all")
    Iterable<User> getUsers() {
        return userService.findAll();
    }

}