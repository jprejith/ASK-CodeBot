import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminLandingComponent } from './components/admin-landing/admin-landing.component';
import { AddQuestionsComponent } from './components/add-questions/add-questions.component';
import { ViewQuestionsComponent } from './components/view-questions/view-questions.component';
import { EditQuestionsComponent } from './components/edit-questions/edit-questions.component';

const routes: Routes = [ { 
  path: '',
 children: [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin-landing',
    component: AdminLandingComponent
  },
  {
    path: 'add-questions',
    component: AddQuestionsComponent
  },
  {
    path: 'view-questions',
    component: ViewQuestionsComponent
  },
  {
    path: 'edit-questions/:id',
    component: EditQuestionsComponent
  }
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
