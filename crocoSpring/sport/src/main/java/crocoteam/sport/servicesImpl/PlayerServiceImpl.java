package crocoteam.sport.servicesImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crocoteam.sport.models.PlayerModel;
import crocoteam.sport.repositories.PlayerRepo;
import crocoteam.sport.services.PlayerService;

@Service
public class PlayerServiceImpl implements PlayerService {

	@Autowired
	private PlayerRepo pRepo;
	
	@Override
	public PlayerModel addPlayer(PlayerModel p) {
		// TODO Auto-generated method stub
		return pRepo.save(p);
	}

	@Override
	public PlayerModel editPlayer(PlayerModel p) {
		// TODO Auto-generated method stub
		return pRepo.save(null);
	}

	@Override
	public List<PlayerModel> getAllPlayers() {
		// TODO Auto-generated method stub
		return pRepo.findAll();
	}

	@Override
	public PlayerModel getPlayerById(Long id) {
		// TODO Auto-generated method stub
		Optional<PlayerModel> foundPlayer = pRepo.findById(id);
		return foundPlayer.isPresent() ? foundPlayer.get() : null;
	}

	@Override
	public void deletePlayerById(Long id) {
		// TODO Auto-generated method stub
		pRepo.deleteById(id);
	}

}
