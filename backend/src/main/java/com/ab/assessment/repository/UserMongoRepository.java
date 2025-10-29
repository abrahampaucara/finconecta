package com.ab.assessment.repository;

import com.ab.assessment.model.MongoUser;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserMongoRepository extends MongoRepository<MongoUser, String> {}
