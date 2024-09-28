import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartmentComponent } from './components/department/department.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  // Here whether you will give department or dashboard directly it will redirect to headerComponent + 
  // when you will give empty string then it will redirect to Login Component only not to HeaderComponent
  //after giving router-outer in header component , that time department & dashboard will be visible below header in same page
  {path:'',component:HeaderComponent,children:[
    {path:'department',component:DepartmentComponent},
    {path:'dashboard',component:DashboardComponent},
  ]},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }