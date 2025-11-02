package com.gymmate.gymmate.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.gymmate.gymmate.Entity.Userdata;
import com.gymmate.gymmate.Repository.UserServiceRepo;
import com.gymmate.gymmate.dto.userLogin;

@Service
public class UserService {
    @Autowired
    private UserServiceRepo userservicerepo;

      public void userdata(Userdata userdata) {
        if (!userdata.getPassword().equals(userdata.getConfirmPassword())) {
            throw new IllegalArgumentException("Passwords do not match");
        }
        if (userservicerepo.findByEmail(userdata.getEmail()).isPresent()) {
            throw new IllegalArgumentException("Email is already registered");
        }
        userservicerepo.save(userdata);
    }

    public void login(userLogin loginRequest) {
        Userdata user = userservicerepo.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

        if (!loginRequest.getPassword().equals(user.getPassword())) {
            throw new IllegalArgumentException("Invalid email or password");
        }
    } 
}
