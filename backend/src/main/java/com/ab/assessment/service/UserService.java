package com.ab.assessment.service;

import com.ab.assessment.model.User;
import com.ab.assessment.model.MongoUser;
import com.ab.assessment.repository.UserPostgresRepository;
import com.ab.assessment.repository.UserMongoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserPostgresRepository postgresRepo;
    private final UserMongoRepository mongoRepo;

    public UserService(UserPostgresRepository postgresRepo, UserMongoRepository mongoRepo) {
        this.postgresRepo = postgresRepo;
        this.mongoRepo = mongoRepo;
    }

    public List<User> getAllUsers() {
        return postgresRepo.findAll();
    }

    public User createUser(User user) {
        User saved = postgresRepo.save(user);

        MongoUser mongoUser = new MongoUser();
        mongoUser.setUsername(saved.getUsername());
        mongoUser.setEmail(saved.getEmail());
        mongoRepo.save(mongoUser);

        return saved;
    }

    public Optional<User> getUserById(Long id) {
        return postgresRepo.findById(id);
    }

    public void deleteUser(Long id) {
        postgresRepo.deleteById(id);
    }
}
