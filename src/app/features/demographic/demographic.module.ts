import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {NgxMaskModule} from 'ngx-mask'




import { DemographicRoutingModule } from './demographic-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


import { SodaPurchaseComponent } from './soda-purchase/soda-purchase.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http'; 




@NgModule({
  declarations: [SodaPurchaseComponent],
  imports: [
    DemographicRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppMaterialModule,
    FlexLayoutModule,
    CommonModule,
    NgxMaskModule.forRoot()
  ]
})


export class DemographicModule { }
