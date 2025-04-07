import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent {
  @ViewChild('teamForm') teamForm!: NgForm;
  team: any = {
    name: '',
    owner: '',
    foundation: ''
  };

  constructor(
    private tService: TeamService,
    private adminComponent: AdminComponent
  ) { }

  addTeam() {
    this.tService.addTeam(this.team).subscribe({
      next: () => {
        this.teamForm.resetForm();
        this.adminComponent.setActiveTab('teams');
      },
      error: (err) => console.error(err)
    });
  }
}