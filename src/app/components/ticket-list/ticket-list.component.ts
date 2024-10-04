import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
  activeLink: string = '';  // Variable to store active link

  constructor(private router: Router) {}

  // This method sets the active link
  setActive(link: string) {
    this.activeLink = link;
  }

}
