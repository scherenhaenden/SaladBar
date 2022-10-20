import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/api/login/login-service.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  public userEmailAddress: string = "";
  public userpassword: string = "";

  constructor(private loginServiceService: LoginServiceService) { }

  ngOnInit(): void {
  }

  // Create method login on click
  public async login(): Promise<void> {


    var result = await this.loginServiceService.login(this.userEmailAddress, this.userpassword);
    console.log(result);

  }

}
