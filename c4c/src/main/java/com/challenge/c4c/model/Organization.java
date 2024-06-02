package com.challenge.c4c.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
public class Organization {
    @Id
    @GeneratedValue
    @Column(unique = true, nullable = false)
    int id;

    @Column(nullable = false)
    String name;

    @Column(nullable = false)
    String logoURL;

    @Column(nullable = false)
    String description;

    @Column(nullable = false)
    boolean isActive;
}
