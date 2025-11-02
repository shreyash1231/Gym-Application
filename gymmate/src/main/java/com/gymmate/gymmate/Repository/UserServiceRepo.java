package com.gymmate.gymmate.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.gymmate.gymmate.Entity.Userdata;
import com.gymmate.gymmate.dto.userLogin;

@Repository
public interface UserServiceRepo extends JpaRepository<Userdata,Long>{
    Optional<Userdata> findByEmail(String email);
}
