import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { RefreshComponent } from './components/refresh/refresh.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "signin", component: LoginComponent },
  {path: 'refresh', component: RefreshComponent},
  { path: "register", component: SignupComponent },
  { path: "addMatch", component: AddMatchComponent },
  { path: 'editmatch/:id', component: EditMatchComponent },
  { path: "addTeam", component: AddTeamComponent },
  { path: "editTeam/:id", component: EditTeamComponent },
  { path: "addPlayer", component: AddPlayerComponent },
  { path: "editPlayer/:id", component: EditPlayerComponent },
  { path: "allplayers", component: PlayersComponent },
  { path: "allteams", component: TeamsComponent },
  { path: "allmatches", component: MatchesComponent },
  { path: "matchinfo/:id", component: MatchInfoComponent },
  { path: "teamInfo/:id", component: TeamInfoComponent },
  { path: "playerInfo/:id", component: PlayerInfoComponent },
  {
    path: "admin", component: AdminComponent, children: [
      { path: 'matches', component: MatchesTableComponent },
      { path: 'addMatch', component: AddMatchComponent },
      { path: 'players', component: PlayersTableComponent },
      { path: 'addPlayer', component: AddPlayerComponent },
      { path: 'teams', component: TeamsTableComponent },
      { path: 'addTeam', component: AddTeamComponent }
    ]
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
