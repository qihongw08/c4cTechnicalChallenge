package com.challenge.c4c.service;

import com.challenge.c4c.model.Organization;
import com.challenge.c4c.repository.OrganizationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

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
     * Removes the given organization from the database
     *
     * @param organization the organization entity to remove
     */
    public void removeByOrganization(Organization organization) {
        this.organizationRepository.delete(organization);
    }

    /**
     * Adds the given organization to the database.
     *
     * @param organization the organization object to add
     */
    public Organization addOrganization(Organization organization) {
        return this.organizationRepository.save(organization);
    }

    /**
     * Updates the Organization with the given id with the given Organization entity
     *
     * @param id the id of the Organization entity to update
     * @param newOrganization the new Organization entity to update the old one with
     */
    public Organization updateOrganization(String id, Organization newOrganization) {
        Optional<Organization> oldOrganization = this.organizationRepository.findById(id);
        if (oldOrganization.isPresent()) {
            Organization organization = oldOrganization.get();

            organization.setName(newOrganization.getName());
            organization.setDescription(newOrganization.getDescription());
            organization.setLogoURL(newOrganization.getLogoURL());
            organization.setActive(newOrganization.isActive());

            return this.organizationRepository.save(organization);
        }

        return newOrganization;
    }
}
