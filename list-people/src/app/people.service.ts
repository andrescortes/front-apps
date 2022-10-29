import {People} from "./people.model";
import {LoggingService} from "./LoggingService.service";
import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class PeopleService {
  persons: People[] = [
    new People('Juan', 'Perez'),
    new People('Pedro', 'Martinez'),
    new People('Maria', 'Gonzalez'),
    new People('Karla', 'Lara'),
  ];

  greet = new EventEmitter<number>();

  constructor(private loggingService: LoggingService) {
  }

  addPerson(person: People) {
    this.loggingService.sendMessage(`Sent parameters of ${person.name} ${person.lastName}`);
    this.persons.push(person);
  }
}
