import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  public userEmailAddress: string = "";
  public userpassword: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  // Create method login on click
  public login(): void {
    alert();
    console.log("User email address: " + this.userEmailAddress);
    console.log("User password: " + this.userpassword);
  }

}
