import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class SodaPurchaseService{
baseUrl: String ="http://localhost:8080/soda-machine-api";

machineId: String ="1234";

constructor(private httpClient:HttpClient){

}

purchaseSoda(payload: any){
    return this.httpClient.post(this.baseUrl + `/${this.machineId}/soda/purchase`,payload).subscribe(data=>{
        return data;
    });
}

updateMachineState(payload: any){
    return this.httpClient.put(this.baseUrl + `/${this.machineId}/state`,payload).subscribe(data=>{
        return data;
    });
}

}