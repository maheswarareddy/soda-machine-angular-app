import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({providedIn:'root'})
export class SodaPurchaseService{
baseUrl: String ="http://localhost:8080/soda-machine-api";

machineId: String ="1234";

constructor(private httpClient:HttpClient){

}

purchaseSoda(payload: any):Observable<any>{
    return this.httpClient.post(this.baseUrl + `/${this.machineId}/soda/purchase`,payload);
}

addToInventory(payload: any):Observable<any>{
    return this.httpClient.post(this.baseUrl + `/${this.machineId}/inventory/soda`,payload);
}

updateInventory(payload: any,brand:String):Observable<any>{
    return this.httpClient.put(this.baseUrl + `/${this.machineId}/inventory/soda/${brand}`,payload);
}

updateMachineState(payload: any):Observable<any>{
    return this.httpClient.put(this.baseUrl + `/${this.machineId}/state`,payload); 
    
}

getMachineState():Observable<any>{
    return this.httpClient.get(this.baseUrl + `/${this.machineId}/state`); 
    
}

}