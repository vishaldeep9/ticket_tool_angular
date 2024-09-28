import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  baseUrl: string = 'https://freeapi.miniprojectideas.com/api/TicketsNew/';

  constructor(private http: HttpClient) {}
  //^ -------userAuth-----------------------------------
  login(object: any): Observable<any> {
    // debugger;
    return this.http.post(this.baseUrl + 'Login', object);
  }

  //^ -------Department---------------------------------
  getAllDepartment(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}GetDepartments`);
  }
  createDepartment(object: any): Observable<any> {
    return this.http.post(`${this.baseUrl}CreateDepartment`, object);
  }
  updateDepartment(object: any): Observable<any> {
    return this.http.put(`${this.baseUrl}UpdateDepartment`, object);
  }
  deleteDepartmentById(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}DeleteDepartment?id=${id}`);
  }
}
