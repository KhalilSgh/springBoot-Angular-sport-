import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matchesTab: any = [
    
  ];

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.matchService.getAllMatches().subscribe(
      (matches) => {this.matchesTab = matches;}
    );
  }

}
