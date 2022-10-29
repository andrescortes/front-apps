import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    this.loginService.getAuth().subscribe({
      next: (auth) => {
        if (auth) {
          this.router.navigate(['/']);
        }
      }
    })
  }

  login() {
    this.loginService.login(this.email, this.password)
    .then(res => {
      this.flashMessage.show('You are now logged in', {
        cssClass: 'alert-success',
        timeout: 4000
      });
      this.router.navigate(['/']);
    }).catch(err => {
        this.flashMessage.show(err.message, {
          cssClass: 'alert-danger',
          timeout: 4000
        });
        this.router.navigate(['/login']);
      }
    );
  }
}
