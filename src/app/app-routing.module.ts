import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartmentComponent } from './components/department/department.component';
import { ParentcategoryComponent } from './components/parentcategory/parentcategory.component';
import { ChildcategoryComponent } from './components/childcategory/childcategory.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  // Here whether you will give department or dashboard directly it will redirect to headerComponent + 
  // when you will give empty string then it will redirect to Login Component only not to HeaderComponent
  //after giving router-outer in header component , that time department & dashboard will be visible below header in same page
  {path:'',component:HeaderComponent,children:[
    {path:'department',component:DepartmentComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'parent-category',component:ParentcategoryComponent},
    {path:'child-category',component:ChildcategoryComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'new-ticket',component:NewTicketComponent},
    {path:'ticket-list',component:TicketListComponent}
  ]},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }