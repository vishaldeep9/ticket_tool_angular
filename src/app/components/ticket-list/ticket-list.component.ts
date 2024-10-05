import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
})
export class TicketListComponent implements OnInit {
  //  making by-default my-ticket , means this one will be selected when we will come on this page
  mode: string = 'my-ticket';
  ticketList: any[] = [];
  loggedUserEmpId: number | undefined;

  constructor(private mService: MasterService) {}
  ngOnInit(): void {
    const userData = localStorage.getItem('ticketUser');
    if (userData) {
      const empData = JSON.parse(userData);
      this.loggedUserEmpId = empData.employeeId;
    }
    this.onModeChange(this.mode);
  }

  onModeChange(text: string) {
    this.mode = text;
    if (this.mode == 'my-ticket' && this.loggedUserEmpId) {
      this.mService
        .getTicketsCreatedByLoggedEmp(this.loggedUserEmpId)
        .subscribe(
          (response) => {
            this.ticketList = response.data;
          },
          (error) => {
            console.log('Error Message' + error);
          }
        );
    } else if (this.mode == 'assigned-ticket' && this.loggedUserEmpId) {
      this.mService.getTicketsAssignedToEmp(this.loggedUserEmpId).subscribe(
        (response) => {
          this.ticketList = response.data;
          console.log(this.ticketList);
        },
        (error) => {
          console.log('Error Message' + error);
        }
      );
    }
  }
  changeStatus(text: string, ticketId: number) {
    if (text == 'start') {
      this.mService.startTicket(ticketId).subscribe((res) => {
        if (res.result) {
          alert(`Ticket Status Changed`);
          this.onModeChange(this.mode);
        } else {
          alert(res.message);
        }
      });
    } else {
      this.mService.closetTicket(ticketId).subscribe((res) => {
        if (res.result) {
          alert(`Ticket Close Successfully`);
          this.onModeChange(this.mode);
        } else {
          alert(res.message);
        }
      });
    }
  }
}

