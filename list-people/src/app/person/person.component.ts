import {Component, Input, OnInit} from '@angular/core';
import {People} from "../people.model";
import {PeopleService} from "../people.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person: People;
  @Input() indice: number;

  constructor(private peopleService: PeopleService) {

  }

  ngOnInit() {
  }

  emitGreeting(): void {
    this.peopleService.greet.emit(this.indice);
  }

}

