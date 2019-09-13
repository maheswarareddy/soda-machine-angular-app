import { NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {NgxMaskModule} from 'ngx-mask'




import { ReactiveFormsModule } from '@angular/forms';


import { SodaPurchaseComponent } from './soda-purchase/soda-purchase.component';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http'; 
import { SodaPurchaseRoutingModule } from './soda-purchase-routing.module';
import { SodaPurchaseService } from "./soda-purchase/soda-purchase-service"



@NgModule({
  declarations: [SodaPurchaseComponent],
  providers:[SodaPurchaseService],
  imports: [
    SodaPurchaseRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppMaterialModule,
    FlexLayoutModule,
    CommonModule,
    NgxMaskModule.forRoot()
  ]
  
})


export class SodaPurchaseModule { }
