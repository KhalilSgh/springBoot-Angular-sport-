package crocoteam.sport.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import crocoteam.sport.models.MatchModel;

@Repository
public interface MatchRepo extends JpaRepository<MatchModel, Long> {

}
