import {EventEmitter, Injectable} from '@angular/core';
import {LoggingService} from './LoggingService.service';
import {Persona} from './persona.model';
import {DataServices} from './data.services';


@Injectable()
export class PersonasService {
  personas: Persona[] = [
    /*new Persona('Juan', 'Perez'),
    new Persona('Laura', 'Juarez'),*/
  ];

  saludar = new EventEmitter<number>();

  constructor(
    private loggingService: LoggingService,
    private dataServices: DataServices
  ) {
  }

  setPersonas(personas: Persona[]): void {
    this.personas = personas;
  }

  getPeopleFromFirebase(): any {
    return this.dataServices.loadPeopleFromFirebase();
  }

  agregarPersona(persona: Persona): void {
    if (this.personas == null) {
      this.personas = [];
    }
    this.personas.push(persona);
    this.dataServices.savePeople(this.personas);
  }

  findPerson(index: number): Persona {
    let person: Persona = this.personas[index];
    return person;

  }

  updatePerson(index: number, persona: Persona): void {
    let person1: Persona = this.personas[index];
    //console.log('persona: ' + person1.nombre + ' ' + person1.apellido);
    person1.nombre = persona.nombre;
    person1.apellido = persona.apellido;
    this.dataServices.updatePerson(index, persona);
  }

  modificarPersonas() {
    //this.loggingService.enviaMensajeAConsola('modificar todas las personas:');
    if (this.personas != null)
      //Guarda todas las personas nuevamente para regenerar indicess
    {
      this.dataServices.savePeople(this.personas);
    }

  }

  deletePerson(index: number) {
    this.personas.splice(index, 1);
    this.dataServices.deletePerson(index);
    //again to save array people
    this.modificarPersonas();
  }
}
