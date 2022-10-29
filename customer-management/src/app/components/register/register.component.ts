import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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

  register() {
    this.loginService.register(this.email, this.password)
    .then(res => {
      this.flashMessage.show('You are now registered and can log in', {
        cssClass: 'alert-success',
        timeout: 4000
      });
      this.router.navigate(['/login']);
    }).catch(err => {
        this.flashMessage.show(err.message, {
          cssClass: 'alert-danger',
          timeout: 4000
        });
        this.router.navigate(['/register']);
      }
    );
  }
}
