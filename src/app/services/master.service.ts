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
  deleteDepartmentById(id: number): Observable<any> {
    debugger;
    return this.http.delete(`${this.baseUrl}DeleteDepartment?id=${id}`);
  }
  //^ -------Parent Category---------------------------------
  getAllpCategory(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}GetParentCategory`);
  }
  createpCategory(object: any): Observable<any> {
    return this.http.post(`${this.baseUrl}CreateParentCategory`, object);
  }
  updatepCategory(object: any): Observable<any> {
    return this.http.put(`${this.baseUrl}UpdateParentCategory`, object);
  }
  deletepCategoryById(id: number): Observable<any> {
    debugger;
    return this.http.delete(`${this.baseUrl}DeleteParentCategory?id=${id}`);
  }

  //^------ChildCategory---------------------------------
  getAllcCategory(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}GetChildCategory`);
  }
  createcCategory(object: any): Observable<any> {
    return this.http.post(`${this.baseUrl}CreateChildCategory`, object);
  }
  updatecCategory(object: any): Observable<any> {
    debugger;
    return this.http.put(`${this.baseUrl}UpdateChildCategory`, object);
  }
  deletecCategoryById(id: number): Observable<any> {
    debugger;
    return this.http.delete(`${this.baseUrl}DeleteChildCategory?id=${id}`);
  }
}
