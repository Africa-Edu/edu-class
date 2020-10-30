import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { LoginComponent } from './login/login.component';
import {RoutesRoutingModule} from "./routes-routing.module";
import { SignupComponent } from './signup/signup.component';
import {MaterialModule} from "./material.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {StudentRegFormComponent} from "./signup/student-reg-form/student-reg-form.component";
import {TeacherRegFormComponent} from "./signup/teacher-reg-form/teacher-reg-form.component";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NotesComponent} from "./notes/notes.component";
import {AddNotesFormComponent} from "./notes/add-notes-form/add-notes-form.component";
import {UserModule} from "./user-panel/user.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    StudentRegFormComponent,
    TeacherRegFormComponent
],
  imports: [
    BrowserModule,
    UserModule,
    BrowserAnimationsModule,
    RoutesRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
