package com.ab.assessment.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "users_mongo")
public class MongoUser {
    @Id
    private String id;
    private String username;
    private String email;
}
