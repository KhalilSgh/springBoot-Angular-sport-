/**
 * 
 */
package crocoteam.sport.services;

import java.util.List;

import crocoteam.sport.models.PlayerModel;

public interface PlayerService {

	public PlayerModel addPlayer(PlayerModel p);
	
	public PlayerModel editPlayer(PlayerModel p);
	
	public List<PlayerModel> getAllPlayers();
	
	public PlayerModel getPlayerById(Long id);
	
	public void deletePlayerById(Long id);
}
