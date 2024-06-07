package com.challenge.c4c.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "organizations")
public class Organization {
    @Id
    String id;
    String name;
    String logoURL;
    String description;
    boolean active;
}
