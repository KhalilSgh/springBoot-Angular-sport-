import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  playersTab : any = [
    // {id: 1 ,name: "Player A", age : 20 , position : "Pos A" , number : 10},
    // {id: 2 ,name: "Player B", age : 25 , position : "Pos B" , number : 15},
    // {id: 3 ,name: "Player C", age : 37 , position : "Pos C" , number : 11},
  ];
  player: any = []

  constructor(private activatedRoute: ActivatedRoute, private playerService: PlayerService, private router : Router) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.playerService.getPlayerById(id).subscribe(
      (res) => this.player = res
    )
  }
  editPlayer(){
    this.playerService.editPlayer(this.player).subscribe(
      (res) => this.router.navigate(["admin"])
    )
  }

}
