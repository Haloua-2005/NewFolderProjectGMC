import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { NgIfComponent } from './ng-if/ng-if.component';
import { CVsComponent } from './cvs/cvs.component';
import { NgStyleComponent } from './Directives/ng-style/ng-style.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import { NF404Component } from './nf404/nf404.component';
import { DetailsComponent } from './details/details.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { RegisterComponent } from './register/register.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { LoginComponent } from './login/login.component';
import { HiredPersonListComponent } from './hired-person-list/hired-person-list.component';
import { LoginGuard } from './login.guard';
import { LogoutGuard } from './logout.guard';


const routes: Routes = [
  { path : "", redirectTo:'cv', pathMatch:'full'},
  { path : 'cv', component: CVsComponent, children: [
    { path : 'cv', redirectTo:'cv/HPL'},

    { path : 'details/:person', component: DetailsComponent },
    { path : 'ngIf', component: NgIfComponent },
  ] },
  { path : 'ngStyle', component: NgStyleComponent, children:[
    {path : 'color/:color', component: ColorChangerComponent}
  ] },
  { path : 'login', component: EmailVerificationComponent },
  { path : 'register', component: RegisterComponent, canActivate:[LoginGuard] },
  { path : 'asyncpipe', component: AsyncPipeComponent },
  { path : 'Login', component: LoginComponent, canActivate:[LogoutGuard] },
  { path : 'HPL', component: HiredPersonListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
