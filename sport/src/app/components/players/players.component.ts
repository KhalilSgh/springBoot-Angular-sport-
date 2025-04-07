import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playersTab: any[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe({
      next: (players: any[]) => {
        this.playersTab = players.map(player => ({ 
          ...player,
          teamName: player.team?.name || `Team ID: ${player.team}` || 'No Team' }))
      },
      error: (err) => console.error('Error loading players:', err)
    })
  }

}
