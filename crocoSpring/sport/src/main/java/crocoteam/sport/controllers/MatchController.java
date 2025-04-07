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

import crocoteam.sport.models.MatchModel;
import crocoteam.sport.services.MatchService;

@RequestMapping("api/matches")
@RestController
public class MatchController {

	@Autowired
	private MatchService mService;

	@PostMapping
	public MatchModel addMatch(@RequestBody MatchModel m) {
		return mService.addMatch(m);
	}

	@PutMapping
	public MatchModel updateMatch(@RequestBody MatchModel m) {
		return mService.editMatch(m);
	}

	@DeleteMapping("/{id}")
	public void deletMatch(@PathVariable Long id) {
		mService.deleteMatchById(id);
	}

	@GetMapping("/{id}")
	public MatchModel getMatch(@PathVariable Long id) {
		return mService.getMatchById(id);
	}

	@GetMapping
	public List<MatchModel> getAll() {
		return mService.getAllMatches();
	}
}
