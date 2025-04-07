package crocoteam.sport.servicesImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import crocoteam.sport.models.MatchModel;
import crocoteam.sport.repositories.MatchRepo;
import crocoteam.sport.services.MatchService;

@Service
public class MatchServiceImpl implements MatchService {

	@Autowired
	private MatchRepo mRepo;
	
	@Override
	public MatchModel addMatch(MatchModel m) {
		// TODO Auto-generated method stub
		return mRepo.save(m);
	}

	@Override
	public MatchModel editMatch(MatchModel m) {
		// TODO Auto-generated method stub
		return mRepo.save(m);
	}

	@Override
	public List<MatchModel> getAllMatches() {
		// TODO Auto-generated method stub
		return mRepo.findAll();
	}

	@Override
	public MatchModel getMatchById(Long id) {
		// TODO Auto-generated method stub
		Optional<MatchModel> foundMatch = mRepo.findById(id);
		return foundMatch.isPresent() ? foundMatch.get() : null;
	}

	@Override
	public void deleteMatchById(Long id) {
		// TODO Auto-generated method stub
		mRepo.deleteById(id);
	}

	
}
