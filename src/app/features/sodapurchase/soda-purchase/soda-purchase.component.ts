import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SodaPurchaseService } from './soda-purchase-service';


@Component({
  selector: 'app-person-page',
  templateUrl: './soda-purchase.component.html',
  styleUrls: ['./soda-purchase.component.css']
})
export class SodaPurchaseComponent implements OnInit {

    sodaPurchaseForm :FormGroup;
brand: any =['pepsi','coke','diet-coke','diet-pepsi'];
  constructor(private fb: FormBuilder,private sodaPurchaseService: SodaPurchaseService) {
   }

  ngOnInit() {
    this.initializeForm();
   
  }

  initializeForm() {
    this.sodaPurchaseForm = this.fb.group({
      quantity: ['', Validators.required],
      brand:['',Validators.required]
    });
  }

  performAction(action){
    console.log(this.createUpdateMachineStatePayload(action));
    console.log(action);
  console.log(this.sodaPurchaseService.updateMachineState(this.createUpdateMachineStatePayload(action)));

  }

  createUpdateMachineStatePayload(data)
  {
    return {
      action: data
    }
  }
 

  onSubmit(){
    if(this.sodaPurchaseForm.valid){
      console.log(this.sodaPurchaseForm.value.quantity);
      console.log(this.sodaPurchaseForm.value.brand);
      console.log(this.sodaPurchaseService.purchaseSoda(this.sodaPurchaseForm.value));     
    }
  }
}
