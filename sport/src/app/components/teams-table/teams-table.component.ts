import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit, OnDestroy {
  teamsTab: any = [];
  private destroy$ = new Subject<void>();

  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit(): void {
    this.loadTeams();

    this.teamService.teamsUpdated$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.loadTeams()
    })
  }

  loadTeams(){
    this.teamService.getAllTeams().subscribe(
      (data)=>{
        this.teamsTab=data
      }
    )
  }

  display(id: number) {
    alert(`Team Num : ${id} is displayed`);
    this.router.navigate(['teamInfo/' + id])
  }

  edit(id: number) {
    alert(`Team Num : ${id} is edited`);
    this.router.navigate(['editTeam/' + id]);
  }

  supprimer(id: number) {
    alert(`Team Num : ${id} is deleted`);
    this.teamService.deleteTeamById(id).subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
