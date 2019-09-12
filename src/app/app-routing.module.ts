import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path:"",pathMatch:"full",redirectTo:"soda-machine"},

  {
    path:"soda-machine",
    loadChildren:"./features/demographic/demographic.module#DemographicModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
