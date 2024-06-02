package com.challenge.c4c.controller;

import com.challenge.c4c.model.Organization;
import com.challenge.c4c.service.OrganizationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/organizations")
@RequiredArgsConstructor
@CrossOrigin
public class OrganizationController {
    private final OrganizationService organizationService;

    /**
     * Endpoint that gets all organization.
     *
     * @return the all organization
     */
    @GetMapping("/find/all")
    public List<Organization> getAllOrganization() {
        return this.organizationService.getAllOrganization();
    }

    /**
     * Endpoint that adds an organization.
     *
     * @param organization the organization
     */
    @PostMapping("/add")
    public void addOrganization(@RequestBody Organization organization) {
        this.organizationService.addOrganization(organization);
    }

    /**
     * Endpoint that deletes organization by id.
     *
     * @param id the id
     */
    @DeleteMapping("/remove/{id}")
    public void deleteOrganizationById(@PathVariable Long id) {
        this.organizationService.removeById(id);
    }
}
