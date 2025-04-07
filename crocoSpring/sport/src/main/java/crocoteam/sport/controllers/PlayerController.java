package crocoteam.sport.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crocoteam.sport.models.PlayerModel;
import crocoteam.sport.models.TeamModel;
import crocoteam.sport.services.PlayerService;
import crocoteam.sport.services.TeamService;

@RequestMapping("api/players")
@RestController
public class PlayerController {

	@Autowired
	private PlayerService pService;
	@Autowired
	private TeamService tService;
	
	@PostMapping
	public PlayerModel addPlayer(@RequestBody PlayerModel p) {
		Long teamId = p.getTeam().getId();
		TeamModel team = tService.getTeamById(teamId);
		p.setTeam(team);
		return pService.addPlayer(p);
	}
	
	@PutMapping
	public PlayerModel editPlayer(@RequestBody PlayerModel p) {
		return pService.editPlayer(p);
	}
	
	@DeleteMapping("/{id}")
	public void  deletePlayer(@PathVariable Long id) {
		pService.deletePlayerById(id);
	}
	
	@GetMapping("/{id}")
	public PlayerModel getPlayer(@PathVariable Long id) {
		return pService.getPlayerById(id);
	}
	
	@GetMapping
	public List<PlayerModel> getAll(){
		return pService.getAllPlayers();
	}
}
