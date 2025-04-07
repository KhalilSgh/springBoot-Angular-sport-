import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  matchesTab : any =[
    // {id : 1, scoreOne : 1, scoreTwo : 2, teamOne : "A", teamTwo : "B"},
    // {id : 2, scoreOne : 3, scoreTwo : 0, teamOne : "C", teamTwo : "D"},
    // {id : 3, scoreOne : 2, scoreTwo : 1, teamOne : "E", teamTwo : "F"}
  ];
  match : any = {};
  constructor(private activatedRoute : ActivatedRoute, private mService: MatchService, private router: Router) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    //this.match = this.matchesTab.find((m : any) => m.id == id);
    this.mService.getMatchById(id).subscribe(
      (res) => {
        this.match = res;
      }
    );
  }

  editMatch(){
    this.mService.editMatch(this.match).subscribe(
      (res) => this.router.navigate(["admin"])
    );
  }

}
