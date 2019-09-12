import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SodaPurchaseComponent } from './soda-purchase/soda-purchase.component';

const routes: Routes = [
{
  path:"",
  component:SodaPurchaseComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemographicRoutingModule { }
