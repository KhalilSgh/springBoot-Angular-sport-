import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit, OnDestroy {
  playersTab: any = [];
  private destroy$ = new Subject<void>();

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit(): void {
    this.loadPlayers();

    this.playerService.playersUpdated$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(()=>{
      this.loadPlayers()
    })
  }

  loadPlayers(){
    this.playerService.getAllPlayers().subscribe(
      (data)=>{
        this.playersTab=data
      }
    )
  }

  display(id: number) {
    alert(`Player Num : ${id} is displayed`);
    this.router.navigate(['playerInfo/' + id])
  }

  edit(id: number) {
    alert(`Player Num : ${id} is edited`);
    this.router.navigate(['editPlayer/' + id]);
  }

  supprimer(id: number) {
    alert(`Player Num : ${id} is deleted`);
    this.playerService.deletePlayerById(id).subscribe()
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
