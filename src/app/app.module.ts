import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { LoginComponent } from './login/login.component';
import {RoutesRoutingModule} from "./routes-routing.module";
import { SignupComponent } from './signup/signup.component';
import {MaterialComponentModule} from "./materialComponent.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {StudentRegFormComponent} from "./signup/student-reg-form/student-reg-form.component";
import {TeacherRegFormComponent} from "./signup/teacher-reg-form/teacher-reg-form.component";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserPanelComponent,
    LoginComponent,
    SignupComponent,
    StudentRegFormComponent,
    TeacherRegFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesRoutingModule,
    MaterialComponentModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
