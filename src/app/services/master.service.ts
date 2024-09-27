import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  baseUrl:string="https://freeapi.miniprojectideas.com/api/TicketsNew/";

  constructor(private http:HttpClient) { }

  login(object:any):Observable<any>
  {
    // debugger;
    return this.http.post(this.baseUrl+'Login',object);
  }
}
