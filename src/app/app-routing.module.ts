import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { NgIfComponent } from './ng-if/ng-if.component';
import { CVsComponent } from './cvs/cvs.component';


const routes: Routes = [
  { path : 'ngIf', component: NgIfComponent },
  { path : 'cv', component: CVsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
