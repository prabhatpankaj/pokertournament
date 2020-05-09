package com.pilon.pokertournament.user;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> findById(String id) {
        return userRepository.findById(id);
    }
    
    public Iterable<User> findAll() {
        return userRepository.findAll();
    }
}