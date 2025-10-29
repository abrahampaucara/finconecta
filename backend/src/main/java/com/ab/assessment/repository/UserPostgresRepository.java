package com.ab.assessment.repository;

import com.ab.assessment.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface UserPostgresRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
