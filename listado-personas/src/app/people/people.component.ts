import {Component, OnInit} from '@angular/core';
import {Persona} from '../persona.model';
import {PersonasService} from '../persona.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  personas: Persona[] = [];

  constructor(
    private personasService: PersonasService,
    private router: Router) {
  }

  ngOnInit(): void {
    //this.personas = this.personasService.personas;
    this.personasService.getPeopleFromFirebase()
    .subscribe({
      next: (personas: Persona[]) => {
        //console.table(personas);
        this.personas = personas;
        this.personasService.setPersonas(this.personas);
      },
      error: (err: any) => {
        console.table(err);
        console.log('Error: ', err);
      },
      complete: () => {
        //console.log('complete get People from Firebase');
      }
    });
    /*(personas: Persona[]) => {
      console.log('personas: ' + personas[0].nombre + ' ' + personas[0].apellido);
      this.personas = personas;
      this.personasService.setPersonas(this.personas);
    },
    (error: any) => {
      console.log(' error from people.component: ' + error);
    });*/
  }

  addPerson() {
    this.router.navigate(['people/add'], {queryParams: {modeEdit: 0}});
  }
}
