import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  teamsTab : any =[
    // {id : 1, name: "Red", owner : "Ali", foundation : 1980},
    // {id : 2, name: "Blue", owner : "Mondher", foundation : 1990},
    // {id : 3, name: "Black", owner : "Nourdin", foundation : 2000}
  ];
  team: any =[]

  constructor(private activatedRoute: ActivatedRoute, private tService: TeamService, private router: Router) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    //this.team = this.teamsTab.find((m : any) => m.id == id);
    this.tService.getTeamById(id).subscribe(
      (res) => this.team = res
    );
  }
  editTeam(){
    this.tService.editTeam(this.team).subscribe(
      (res) => this.router.navigate(["admin"])
    );
  }

}
