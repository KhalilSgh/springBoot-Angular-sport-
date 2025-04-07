import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playerUrl: string = 'http://localhost:9000/api/players';
  public currentPlayers: any[] = [];
  private playersUpdated = new Subject<void>();

  playersUpdated$ = this.playersUpdated.asObservable()

  constructor(private http: HttpClient) { }

  getAllPlayers() {
    return this.http.get(this.playerUrl).pipe(
      tap((players: any) => {
        this.currentPlayers = players
      })
    );
  }

  getPlayerById(id: number) {
    return this.http.get(this.playerUrl + "/" + id);
  }

  addPlayer(playerObj: any) {
    return this.http.post(this.playerUrl, playerObj).pipe(
      tap((response) => {
        this.playersUpdated.next();
        return response
      })
    );
  }

  editPlayer(plyaerObj: any) {
    return this.http.put(this.playerUrl, plyaerObj).pipe(
      tap(() => {
        this.playersUpdated.next()
      })
    );
  }

  deletePlayerById(id: number) {
    return this.http.delete(this.playerUrl + "/" + id).pipe(
      tap(() => {
        this.playersUpdated.next()
      })
    );
  }
}
