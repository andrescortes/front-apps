import {Component, OnInit} from '@angular/core';
import {initializeApp} from 'firebase/app';
import {LoginService} from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  firebaseConfig: Object = {
    apiKey: 'AIzaSyDh1LuQGzt3c0L9WO_4vYh2PiOuQDi-3c8',
    authDomain: 'list-people-2012f.firebaseapp.com'
  };

  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {
    initializeApp(this.firebaseConfig);
  }

  isAuthenticated(): boolean {
    return this.loginService.isAuthenticated();
  }

  close(): void {
    this.loginService.logout();
  }
}
