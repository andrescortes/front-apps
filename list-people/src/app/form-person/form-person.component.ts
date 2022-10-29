import {Component, ElementRef, ViewChild} from '@angular/core';
import {People} from "../people.model";
import {LoggingService} from "../LoggingService.service";
import {PeopleService} from "../people.service";

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.css']
})
export class FormPersonComponent {
  //@Output() personCreated = new EventEmitter<People>();

  nameInput: string = '';
  lastNameInput: string = '';
  //reference by create variable binding
  /*createPerson(): void {
    let person1 = new People(this.nameInput, this.lastNameInput);
    //this.persons.push(person1);
    this.personCreated.emit(person1);
  }*/


  /*@ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('lastNameInput') lastNameInput: ElementRef;*/

  constructor(private loggingService: LoggingService,
              private peopleService: PeopleService,
  ) {
    this.peopleService.greet.subscribe((indice: number) => {
      alert(`The indices is:  ${indice}`);
    })
  }

  createPerson(): void {
    let person1 = new People(this.nameInput, this.lastNameInput);
    //this.persons.push(person1);
    this.peopleService.addPerson(person1);
    this.nameInput = '';
    this.lastNameInput = '';
  }

  /*createPerson(): void {
    let person1 = new People(this.nameInput.nativeElement.value, this.lastNameInput.nativeElement.value);
    //this.loggingService.sendMessage(`Sent parameters of ${person1.name} ${person1.lastName}`);
    //this.personCreated.emit(person1);
    this.peopleService.addPerson(person1);
    this.nameInput.nativeElement.value = '';
    this.lastNameInput.nativeElement.value = '';
  }*/

  //reference type local variable
  /*createPerson(nameInput: HTMLInputElement, lastNameInput: HTMLInputElement): void {
    let person1 = new People(nameInput.value, lastNameInput.value);
    //this.persons.push(person1);
    this.personCreated.emit(person1);
    nameInput.value = '';
    lastNameInput.value = '';
  }*/


}
