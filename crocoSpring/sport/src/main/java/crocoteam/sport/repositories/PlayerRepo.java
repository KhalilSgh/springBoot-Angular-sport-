package crocoteam.sport.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import crocoteam.sport.models.PlayerModel;

@Repository
public interface PlayerRepo extends JpaRepository<PlayerModel, Long> {

}
