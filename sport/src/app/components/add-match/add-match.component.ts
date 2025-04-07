import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent {
  @ViewChild('matchForm') matchForm!: NgForm;
  match: any = {
    scoreOne: '',
    scoreTwo: '',
    teamOne: '',
    teamTwo: ''
  };

  constructor(
    private mService: MatchService,
    private adminComponent: AdminComponent
  ) { }

  addMatch() {
    this.mService.addMatch(this.match).subscribe({
      next: () => {
        this.matchForm.resetForm();
        this.adminComponent.setActiveTab('matches');
      },
      error: (err) => console.error(err)
    });
  }
}