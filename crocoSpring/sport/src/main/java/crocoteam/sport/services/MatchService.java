package crocoteam.sport.services;

import java.util.List;

import crocoteam.sport.models.MatchModel;

public interface MatchService {

	public MatchModel addMatch(MatchModel m);

	public MatchModel editMatch(MatchModel m);

	public List<MatchModel> getAllMatches();

	public MatchModel getMatchById(Long id);
	
	public void deleteMatchById(Long id);
}
