import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { NgIfComponent } from './ng-if/ng-if.component';
import { CVsComponent } from './cvs/cvs.component';
import { NgStyleComponent } from './Directives/ng-style/ng-style.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';


const routes: Routes = [
  { path : 'ngIf', component: NgIfComponent },
  { path : 'cv', component: CVsComponent },
  { path : 'ngStyle', component: NgStyleComponent },
  { path : 'color/:color', component: ColorChangerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
