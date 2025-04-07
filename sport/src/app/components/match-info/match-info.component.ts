import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {

  matchesTab: any = [

  ];

  foundMatch: any;

  constructor(private activatedRoute  : ActivatedRoute, private matchService: MatchService) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.matchService.getMatchById(id).subscribe(
      (data) => this.foundMatch = data
    )
  }

}
