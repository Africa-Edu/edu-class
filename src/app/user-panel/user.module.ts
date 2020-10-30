import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotesComponent} from "../notes/notes.component";
import {AddNotesFormComponent} from "../notes/add-notes-form/add-notes-form.component";
import {UserPanelComponent} from "./user-panel.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MaterialModule} from "../material.module";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    UserPanelComponent,
    NotesComponent,
    AddNotesFormComponent,
    UserProfileComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MaterialModule,
    RouterModule,
  ]
})
export class UserModule { }
