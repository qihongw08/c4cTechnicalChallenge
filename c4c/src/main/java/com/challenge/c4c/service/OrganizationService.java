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

    public Organization updateOrganization(String name, Organization organization) {
        Organization oldOrganization = this.organizationRepository.findByName(name);

        oldOrganization.setName(organization.getName());
        oldOrganization.setDescription(organization.getDescription());
        oldOrganization.setLogoURL(organization.getLogoURL());
        oldOrganization.setActive(organization.isActive());

        return oldOrganization;
    }
}
