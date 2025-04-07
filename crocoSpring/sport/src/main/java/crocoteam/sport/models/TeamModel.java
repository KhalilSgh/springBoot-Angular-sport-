package crocoteam.sport.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class TeamModel {

	@Id
	@Column(name="TEAM_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String Owner;
	private String Foundation;
	
	@OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("team")
	private List<PlayerModel> players;
	
	public TeamModel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TeamModel(String name, String owner, String foundation) {
		super();
		this.name = name;
		Owner = owner;
		Foundation = foundation;
	}

	public Long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getOwner() {
		return Owner;
	}

	public void setOwner(String owner) {
		Owner = owner;
	}

	public String getFoundation() {
		return Foundation;
	}

	public void setFoundation(String foundation) {
		Foundation = foundation;
	}

	public List<PlayerModel> getPlayers() {
		return players;
	}

	public void setPlayers(List<PlayerModel> players) {
		this.players = players;
	}
	
	
		
}
