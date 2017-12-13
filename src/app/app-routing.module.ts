import {LandingComponent} from './landing/landing.component';
import {HomeComponent} from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { ChicagoComponent } from './chicago/chicago.component';

import { ActivatedRoute } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    pathMatch: 'full',
    component: LandingComponent, 
    children: []
  },
  {
    path: 'home/test',
    pathMatch: 'full',
    component: HomeComponent, 
    children: []
  }, 
  {
    path: 'seattle',
    pathMatch: 'full',
    component: SeattleComponent, 
    children: []
  },
  {
    path: 'sanjose',
    pathMatch: 'full',
    component: SanjoseComponent, 
    children: []
  },
  {
    path: 'burbank',
    pathMatch: 'full',
    component: BurbankComponent, 
    children: []
  },
  {
    path: 'dallas',
    pathMatch: 'full',
    component: DallasComponent, 
    children: []
  },
    {
    path: 'dc',
    pathMatch: 'full',
    component: DcComponent, 
    children: []
  },

    {
    path: 'chicago',
    pathMatch: 'full',
    component: ChicagoComponent, 
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
