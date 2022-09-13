import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherschedulesComponent } from './teacherschedules/teacherschedules.component';

const mylinks:Routes =[
  {path: '', redirectTo: 'Home' ,  pathMatch: 'full'},
  {path: 'Home', component: TeacherComponent},
  {path: 'teacherschedules/:id', component: TeacherschedulesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    TeacherschedulesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule, 
    ModalModule.forRoot(),
    ReactiveFormsModule,
    RouterModule.forRoot(mylinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
