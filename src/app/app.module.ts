import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';
import { LoginComponent } from './components/login/login.component';
import { AdminLandingComponent } from './components/admin-landing/admin-landing.component';
import { AddQuestionsComponent } from './components/add-questions/add-questions.component';
import { ViewQuestionsComponent } from './components/view-questions/view-questions.component';
import { EditQuestionsComponent } from './components/edit-questions/edit-questions.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLandingComponent,
    AddQuestionsComponent,
    ViewQuestionsComponent,
    EditQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
 
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
