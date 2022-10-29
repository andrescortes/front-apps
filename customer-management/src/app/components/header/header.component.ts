import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login.service";
import {Router} from "@angular/router";
import {ConfigurationService} from "../../service/configuration.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  loggedInUser: string | null;
  allowRegister: boolean | undefined = false;


  constructor(
    private loginService: LoginService,
    private router: Router,
    private configurationService: ConfigurationService
  ) {

  }

  ngOnInit(): void {
    this.loginService.getAuth()
    .subscribe({
      next: (auth) => {
        if (auth) {
          this.isLoggedIn = true;
          this.loggedInUser = auth.email;
        } else {
          this.isLoggedIn = false;
        }
      }
    });
    this.configurationService.getConfiguration().subscribe({
      next: (config) => {
        this.allowRegister = config.allowRegister;
      }
    })
  }

  logout() {
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
