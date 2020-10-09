import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {UserPanelComponent} from "./user-panel/user-panel.component";

const routes: Routes = [
  {path: '/', component: HomeComponent  },
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserPanelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
