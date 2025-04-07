package crocoteam.sport.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class PlayerModel {

	@Id
	@Column(name="PLAYER_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private int age;
	private String position;
	private Long number;
	
	@ManyToOne
	@JoinColumn(name = "team_id")
	@JsonIgnoreProperties("players")
	private TeamModel team;
	
	public PlayerModel() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PlayerModel(String name, int age, String position, Long number) {
		super();
		this.name = name;
		this.age = age;
		this.position = position;
		this.number = number;
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

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public Long getNumber() {
		return number;
	}

	public void setNumber(Long number) {
		this.number = number;
	}

	public TeamModel getTeam() {
		return team;
	}

	public void setTeam(TeamModel team) {
		this.team = team;
	}

	
	
	
}
