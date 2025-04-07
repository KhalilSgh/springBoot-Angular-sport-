import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  foundTeam: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private teamService: TeamService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.teamService.getTeamById(id).subscribe(
      (team) => this.foundTeam = team
    );
  }
}