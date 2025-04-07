import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private matchUrl: string = 'http://localhost:9000/api/matches';
  public currentMatches: any[] = [];
  private matchesUpdated = new Subject<void>();

  matchesUpdated$ = this.matchesUpdated.asObservable(); 

  constructor(private http: HttpClient) { }

  getAllMatches() {
    return this.http.get(this.matchUrl).pipe(
      tap((matches: any) => {
        this.currentMatches = matches;
      })
    );
  }

  getMatchById(id: number) {
    return this.http.get(this.matchUrl + "/" + id);
  }

  addMatch(matchObj: any) {
    return this.http.post(this.matchUrl, matchObj).pipe(
      tap((response) => {
        this.matchesUpdated.next();
        return response;
      })
    );
  }

  deleteMatchById(id: number) {
    return this.http.delete(`${this.matchUrl}/${id}`).pipe(
      tap(() => {
        this.matchesUpdated.next();
      })
    );
  }

  editMatch(matchObj: any) {
    return this.http.put(this.matchUrl, matchObj).pipe(
      tap(() => {
        this.matchesUpdated.next();
      })
    );
  }
}