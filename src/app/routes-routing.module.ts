import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {UserPanelComponent} from "./user-panel/user-panel.component";
import {SignupComponent} from "./signup/signup.component";
import {NotesComponent} from "./notes/notes.component";
import {UserProfileComponent} from "./user-panel/user-profile/user-profile.component";
import {DashboardComponent} from "./user-panel/dashboard/dashboard.component";

const routes: Routes = [
  {path: '', component: HomeComponent  },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'user', component: UserPanelComponent,
  children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'notes', component: NotesComponent},
    {path: 'profile', component: UserProfileComponent},
    {path: 'dashboard', component: DashboardComponent}
  ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
