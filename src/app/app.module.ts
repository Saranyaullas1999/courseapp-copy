import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { RouterModule,Routes } from '@angular/router';
import { ViewallcourseComponent } from './viewallcourse/viewallcourse.component';
import {HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {
    path:"",component:AddcourseComponent
  },
  {
    path:"view",component:ViewallcourseComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddcourseComponent,
    ViewallcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
