import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  name: string = 'John Doe';
  lastName: string = 'Doe';
  private age: number = 30;

  getAge(): number {
    return this.age;
  }





}
