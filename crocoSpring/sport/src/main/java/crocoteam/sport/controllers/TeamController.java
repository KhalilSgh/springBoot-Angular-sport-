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

import crocoteam.sport.models.TeamModel;
import crocoteam.sport.services.TeamService;

@RequestMapping("/api/teams")
@RestController
public class TeamController {

	@Autowired
	private TeamService tService;

	@PostMapping
	private TeamModel addTeam(@RequestBody TeamModel t) {
		return tService.addTeam(t);
	}

	@PutMapping
	private TeamModel editTeam(@RequestBody TeamModel t) {
		return tService.editTeam(t);
	}

	@DeleteMapping("/{id}")
	private void deleteTeam(@PathVariable Long id) {
		tService.deleteTeamById(id);
	}

	@GetMapping("/{id}")
	private TeamModel getTeam(@PathVariable Long id) {
		return tService.getTeamById(id);
	}

	@GetMapping
	private List<TeamModel> getAll() {
		return tService.getAllTeams();
	}
}
