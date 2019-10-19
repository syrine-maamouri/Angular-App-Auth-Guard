import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  { path:'register', component:RegisterComponent },
  { path:'login', component: LoginComponent },
  { path:'team', component: TeamComponent },
  {path:'**', redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
