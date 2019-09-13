import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SodaPurchaseService } from './soda-purchase-service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-person-page',
  templateUrl: './soda-purchase.component.html',
  styleUrls: ['./soda-purchase.component.css']
})
export class SodaPurchaseComponent implements OnInit {
    stateUpdated:boolean;
    moneyInserted:number;
    sodaAddedToInventory: boolean;
    updatedSodaInventory: boolean;
    sodaPurchaseForm :FormGroup;
    addSodaInventoryForm: FormGroup;
    updateSodaInventoryForm: FormGroup;
    brand: any =['pepsi','coke','diet-coke','diet-pepsi'];
    sodaSold: Boolean;
  constructor(private fb: FormBuilder,private sodaPurchaseService: SodaPurchaseService,
    public snackbar:MatSnackBar) {
   }

  ngOnInit() {
    
    this.initializeForm();
    this.initializeAddSodaInventoryForm();
   this.initializeUpdateSodaInventoryForm();
  }

  initializeForm() {
    this.sodaPurchaseForm = this.fb.group({
      quantity: ['', Validators.required],
      brand:['',Validators.required]
    });
  }

  initializeAddSodaInventoryForm() {
    this.addSodaInventoryForm = this.fb.group({
      quantity: ['', Validators.required],
      brand:['',Validators.required],
      price:['',Validators.required]
    });
  }

  initializeUpdateSodaInventoryForm() {
    this.updateSodaInventoryForm = this.fb.group({
      quantity: ['', Validators.required],
      brand:['',Validators.required],
      price:['',Validators.required]
    });
  }


  performAction(action){
    this.sodaPurchaseService.updateMachineState(this.createUpdateMachineStatePayload(action)).subscribe(data=>{
       this.stateUpdated = data.stateUpdated;
       if( this.stateUpdated){
        this.snackbar.open("The state has been updated", action, {
          duration: 2000,
        });
       }
       console.log("State has been updated: ",this.stateUpdated)
    })
  }

  createUpdateMachineStatePayload(data)
  {
    return {
      action: data
    }
  }
 

  onAddSodaInventorySubmit(){
    if(this.addSodaInventoryForm.valid){
      this.sodaPurchaseService.addToInventory(this.addSodaInventoryForm.value).subscribe(data=>{
        this.sodaAddedToInventory = data.sodaAdded;
        if( this.sodaAddedToInventory){
         this.snackbar.open(this.addSodaInventoryForm.value.brand+"Has been added to Inventory","Quantity: "+this.addSodaInventoryForm.value.quantity,{
           duration: 5000,
         });
        }
     })    
    }
  }

  onUpdateSodaInventorySubmit(){
    if(this.updateSodaInventoryForm.valid){
      this.sodaPurchaseService.updateInventory(this.updateSodaInventoryForm.value,this.updateSodaInventoryForm.value.brand).subscribe(data=>{
        this.updatedSodaInventory = data.sodaUpdated;
        if( this.updatedSodaInventory){ 
         this.snackbar.open(this.updateSodaInventoryForm.value.brand+" Inventory updated","Quantity: "+this.updateSodaInventoryForm.value.quantity,{
           duration: 5000,
         });
        }
     })     
    }
  }

  onSodaPurchaseSubmit(){
    if(this.sodaPurchaseForm.valid){     
    this.sodaPurchaseService.purchaseSoda(this.sodaPurchaseForm.value).subscribe(data=>{
      this.sodaSold = data.sodaSold;
      if( this.sodaSold){
       this.snackbar.open(this.sodaPurchaseForm.value.brand+" has been sold","Quantity: "+this.sodaPurchaseForm.value.quantity,{
         duration: 5000,
       });
      }
   })         
    }
  }

  getMoneyInserted(){
    this.sodaPurchaseService.getMachineState().subscribe(data=>{
      this.moneyInserted = data.moneyInserted;      
       this.snackbar.open("Money Inserted: "+this.moneyInserted,"",{
         duration: 5000,
       });
      
   })         
  }
}
