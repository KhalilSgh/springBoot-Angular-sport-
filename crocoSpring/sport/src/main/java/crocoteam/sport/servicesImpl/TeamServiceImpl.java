package crocoteam.sport.servicesImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crocoteam.sport.models.TeamModel;
import crocoteam.sport.repositories.TeamRepo;
import crocoteam.sport.services.TeamService;

@Service
public class TeamServiceImpl implements TeamService {

	@Autowired
	private TeamRepo tRepo;
	
	@Override
	public TeamModel addTeam(TeamModel t) {
		// TODO Auto-generated method stub
		return tRepo.save(t);
	}

	@Override
	public TeamModel editTeam(TeamModel t) {
		// TODO Auto-generated method stub
		return tRepo.save(t);
	}

	@Override
	public TeamModel getTeamById(Long id) {
		// TODO Auto-generated method stub
		Optional<TeamModel> foundTeam = tRepo.findById(id);
		return foundTeam.isPresent() ? foundTeam.get() : null;
	}

	@Override
	public void deleteTeamById(Long id) {
		// TODO Auto-generated method stub
		tRepo.deleteById(id);
	}

	@Override
	public List<TeamModel> getAllTeams() {
		// TODO Auto-generated method stub
		return tRepo.findAll();
	}

}
