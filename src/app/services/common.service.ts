import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestaurantData } from '../Restaurant.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  baseURL= "http://localhost:3000/resto";


  //depandency injection 
  //private call 
  constructor(private _http : HttpClient) { }


// Method
  getRestoList(){
    //call list component.ts 
    // console.log("This Method is works !");
    //void type ka data return karna padta hai so you write 'return' keywords
    return this._http.get(this.baseURL);
    
  } 

//argumment pass "data:any"
  addRestoList(data:any){
    return this._http.post(this.baseURL, data)
  }

  
//Get Current data
  getCurrentData(id: any):Observable<RestaurantData>{
    return this._http.get<RestaurantData>(`${this.baseURL}/${id}`);
  }

// Update data
  updateResto(id:any, data:any):Observable<any>{
      return this._http.put<any>(`${this.baseURL}/${id}`, data);
  }


// Delete Data
  deleteResto(id:any){
    return this._http.delete(`${this.baseURL}/${id}`)
  }


}
