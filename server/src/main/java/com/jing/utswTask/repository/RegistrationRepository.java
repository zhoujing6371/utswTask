package com.jing.utswTask.repository;

import com.jing.utswTask.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegistrationRepository extends JpaRepository<User, Integer> {
    public User findByEmail(String email);

    public User findByUsername(String username);

    public User findByUsernameAndPassword(String username, String pass);

    public User findByEmailAndPassword(String tmpEmail, String tmpPassword);

    public List<User> findAllByUsertype(String usertype);
}
