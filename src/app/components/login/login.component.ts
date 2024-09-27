import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginObject: any = {
    emailId: '',
    password: '',
  };
  constructor(private masterService: MasterService, private router: Router) {}

  // -------login function----------------------
  onLogin() {
    // debugger;
    //before response
    this.masterService.login(this.loginObject).subscribe((res) => {
      // debugger;
      //after response
      if (res.result) {
        localStorage.setItem('ticketUser', JSON.stringify(res.data));
        this.router.navigate(['dashboard']);
      } else {
        alert(res.message);
      }
    });
  }
}
