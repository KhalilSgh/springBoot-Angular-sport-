import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit, OnDestroy {
  matchesTab: any = [];
  private destroy$ = new Subject<void>();

  constructor(
    private router: Router,
    private mService: MatchService
  ) { }

  ngOnInit(): void {
    this.loadMatches();
    
    this.mService.matchesUpdated$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      console.log('Received update notification');
      this.loadMatches();
    });
  }

  loadMatches() {
    this.mService.getAllMatches().subscribe(
      (data) => {
        this.matchesTab = data;
      }
    );
  }

  display(id: number) {
    alert(`Match Num : ${id} is displayed`);
    this.router.navigate(['matchinfo/' + id]);
  }

  edit(id: number) {
    alert(`Match Num : ${id} is edited`);
    this.router.navigate(['editmatch/' + id]);
  }

  supprimer(id: number) {
    if (confirm(`Delete match ${id}?`)) {
      this.mService.deleteMatchById(id).subscribe();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}