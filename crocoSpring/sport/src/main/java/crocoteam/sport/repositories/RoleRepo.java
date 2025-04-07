package crocoteam.sport.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import crocoteam.sport.models.Role;

public interface RoleRepo extends JpaRepository<Role, Long> {

	Optional<Role> findByName(String name);
	
}
