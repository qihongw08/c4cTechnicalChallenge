package com.challenge.c4c.controller;

import com.challenge.c4c.model.Organization;
import com.challenge.c4c.service.OrganizationService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.aspectj.weaver.ast.Or;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<Organization>> getAllOrganization() {
        try {
            return new ResponseEntity<>(this.organizationService.getAllOrganization(), HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Endpoint that adds the given organization entity.
     *
     * @param organization the organization to add
     */
    @PostMapping("/add")
    public ResponseEntity<Organization> addOrganization(@RequestBody Organization organization) {
        try {
            return new ResponseEntity<>(this.organizationService.addOrganization(organization),
                HttpStatus.CREATED);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Endpoint that deletes the given organization entity.
     *
     * @param organization the organization to remove
     */
    @DeleteMapping("/remove")
    public ResponseEntity<HttpStatus> deleteOrganizationById(@RequestBody Organization organization) {
        try {
            this.organizationService.removeByOrganization(organization);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update/{name}")
    public ResponseEntity<Organization> updateOrganization(@PathVariable String  name,
                                                           @RequestBody Organization organization) {
        try {
            return new ResponseEntity<>(this.organizationService.updateOrganization(name, organization),
                HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
