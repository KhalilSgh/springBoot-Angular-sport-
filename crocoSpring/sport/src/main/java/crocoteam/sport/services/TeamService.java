/**
 * 
 */
package crocoteam.sport.services;

import java.util.List;

import crocoteam.sport.models.TeamModel;

public interface TeamService {

	public TeamModel addTeam(TeamModel t);
	
	public TeamModel editTeam(TeamModel t);
	
	public TeamModel getTeamById(Long id);
	
	public void deleteTeamById(Long id);
	
	public List<TeamModel> getAllTeams();
}
