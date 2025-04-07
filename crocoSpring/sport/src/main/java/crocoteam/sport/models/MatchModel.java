package crocoteam.sport.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class MatchModel {

	@Id
	@Column(name = "MATCH_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private int ScoreOne;
	private int ScoreTwo;
	private String TeamOne;
	private String TeamTwo;

	
	public MatchModel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MatchModel(int scoreOne, int scoreTwo, String teamOne, String teamTwo) {
		super();
		ScoreOne = scoreOne;
		ScoreTwo = scoreTwo;
		TeamOne = teamOne;
		TeamTwo = teamTwo;
	}

	public Long getId() {
		return id;
	}

	public int getScoreOne() {
		return ScoreOne;
	}

	public void setScoreOne(int scoreOne) {
		ScoreOne = scoreOne;
	}

	public int getScoreTwo() {
		return ScoreTwo;
	}

	public void setScoreTwo(int scoreTwo) {
		ScoreTwo = scoreTwo;
	}

	public String getTeamOne() {
		return TeamOne;
	}

	public void setTeamOne(String teamOne) {
		TeamOne = teamOne;
	}

	public String getTeamTwo() {
		return TeamTwo;
	}

	public void setTeamTwo(String teamTwo) {
		TeamTwo = teamTwo;
	}

}
