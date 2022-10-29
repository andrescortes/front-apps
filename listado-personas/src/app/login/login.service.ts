import {Injectable} from '@angular/core';
import {getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {Router} from '@angular/router';


@Injectable()
export class LoginService {
  token: string;

  constructor(private router: Router) {
  }

  login(email: string, password: string): void {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((response: any) => {
      response.user.getIdToken()
      .then((token: string) => {
        //console.log('token: ' + token);
        this.token = token;
        this.router.navigate(['people']);
      });
    });

  }

  getIdToken(): string {
    //console.log('getIdToken' + this.token);
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout(): void {
    const auth = getAuth();
    signOut(auth).then(() => {
      this.token = '';
      this.router.navigate(['login']);
    })
    .catch((error: any) => {
      console.log(error);
    });
  }
}
