package com.challenge.c4c.service;

import com.challenge.c4c.model.Organization;
import com.challenge.c4c.repository.OrganizationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrganizationService {
    private final OrganizationRepository organizationRepository;


    /**
     * Gets all organizations in the database.
     *
     * @return the all organization
     */
    public List<Organization> getAllOrganization() {
        return this.organizationRepository.findAll();
    }

    /**
     * Removes the organization from the database given the id
     *
     * @param id the id of the organization
     */
    public void removeById(Long id) {
        this.organizationRepository.deleteById(id);
    }

    /**
     * Adds the given organization to the database.
     *
     * @param organization the organization object to add
     */
    public void addOrganization(Organization organization) {
        this.organizationRepository.save(organization);
    }
}
