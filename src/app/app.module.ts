import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { DepartmentComponent } from './components/department/department.component';
import { ParentcategoryComponent } from './components/parentcategory/parentcategory.component';
import { ChildcategoryComponent } from './components/childcategory/childcategory.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DepartmentComponent,
    ParentcategoryComponent,
    ChildcategoryComponent,
    EmployeeComponent,
    NewTicketComponent,
    TicketListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
