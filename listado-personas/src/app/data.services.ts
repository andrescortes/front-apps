import {HttpClient} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {Persona} from './persona.model';
import {LoginService} from './login/login.service';

@Injectable()
export class DataServices implements OnInit {
  url: string = 'https://list-people-2012f-default-rtdb.firebaseio.com/data.json';

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {

  }

  ngOnInit(): void {
    //this.token = this.loginService.getIdToken();
  }

  loadPeopleFromFirebase(): any {
    const token = this.loginService.getIdToken();
    return this.httpClient.get(this.url + '?auth=' + token);
  }

  //savePeople
  savePeople(people: Persona[]): void {
    const token = this.loginService.getIdToken();
    this.httpClient.put(this.url + '?auth=' + token, people)
    .subscribe({
      next: (response: any) => {
        //console.table(response);
      },
      complete: () => {
        console.log('was saved!');
      },
      error: (err: any) => {
        console.table(err);
      }
    });
  }

  updatePerson(index: number, persona: Persona): void {
    const token = this.loginService.getIdToken();
    let url: string = 'https://list-people-2012f-default-rtdb.firebaseio.com/data/' + index + '.json' + '?auth=' + token;
    this.httpClient.put(url, persona)
    .subscribe({
        next: (response: any) => {
          //console.log('Result update person!');
          //console.table(response);
        },
        error: (err: any) => {
          console.table(err);
        },
        complete: () => {
          console.log('was updated!');
        }
      }
    );
  }

  deletePerson(index: number): void {
    const token = this.loginService.getIdToken();
    let url: string = 'https://list-people-2012f-default-rtdb.firebaseio.com/data/' + index + '.json' + '?auth=' + token;
    this.httpClient.delete(url)
    .subscribe({
        next: (response: any) => {
          console.log('Result delete person!');
          //console.table(response);
        }
      }
    );
  }


}
