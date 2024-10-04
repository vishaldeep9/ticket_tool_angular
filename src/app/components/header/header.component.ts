import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  activeLink: string = '';  // Variable to store active link
  // This method sets the active link
  setActive(link: string) {
    this.activeLink = link;
  }

constructor(private router:Router){}
  onLogOff(){
    localStorage.removeItem('ticketUser');
    this.router.navigate(['login']);
  }

}
