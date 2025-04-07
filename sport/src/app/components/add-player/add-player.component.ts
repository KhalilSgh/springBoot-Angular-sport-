import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  @ViewChild('playerForm') playerForm!: NgForm
  player: any = {};
  teams: any = [];

  constructor(
    private playerService: PlayerService,
    private teamService: TeamService,
    private adminComponent: AdminComponent
  ) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe(
      (data) => this.teams = data
    )
  }

  addPlayer() {
    console.log(this.player);
    this.player.team = { id: this.player.team };
    this.playerService.addPlayer(this.player).subscribe({
      next: () => {
        this.playerForm.resetForm();
        this.adminComponent.setActiveTab('players');
      },
      error: (err) => console.error(err)
    });
  }

}
