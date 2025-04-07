package crocoteam.sport.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import crocoteam.sport.models.TeamModel;

@Repository
public interface TeamRepo extends JpaRepository<TeamModel, Long> {

}
