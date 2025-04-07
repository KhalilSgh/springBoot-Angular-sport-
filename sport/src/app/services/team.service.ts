import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamUrl: string = 'http://localhost:9000/api/teams';
  public currentTeams: any[] = [];
  private teamsUpdated = new Subject<void>();

  teamsUpdated$ = this.teamsUpdated.asObservable()

  constructor(private http: HttpClient) { }

  getAllTeams() {
    return this.http.get(this.teamUrl).pipe(
      tap((teams: any) => {
        this.currentTeams = teams
      })
    );
  }

  getTeamById(id: number) {
    return this.http.get(this.teamUrl + "/" + id);
  }

  addTeam(teamObj: any) {
    return this.http.post(this.teamUrl, teamObj).pipe(
      tap((response) => {
        this.teamsUpdated.next();
        return response
      })
    );
  }

  deleteTeamById(id: number) {
    return this.http.delete(this.teamUrl + "/" + id).pipe(
      tap(() => {
        this.teamsUpdated.next()
      })
    );
  }

  editTeam(teamObj: any) {
    return this.http.put(this.teamUrl, teamObj).pipe(
      tap(() => {
        this.teamsUpdated.next()
      })
    );
  }
}
