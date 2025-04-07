import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  foundPlayer:any = null;
  teamName: string = 'No Team'

  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.playerService.getPlayerById(id).subscribe({
      next: (response: any) => {
        this.foundPlayer = response;
        this.teamName = response.team?.name || 'No Team';
      },
      error: (err) => {
        console.error('Error loading player:', err);
        this.teamName = 'Error loading team';
      }
    });
  }
}
