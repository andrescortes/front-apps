import {Component, OnInit} from '@angular/core';
import {People} from "./people.model";
import {PeopleService} from "./people.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'List´s People';
  resultSum: number = 0;
  persons: People[] = [];

  constructor(private peopleService: PeopleService) {
  }

//ngOnInit() it's a lifecycle hook that is called after the constructor and after the first ngOnChanges()
  ngOnInit(): void {
    this.persons = this.peopleService.persons;

  }

  getResult(num: number): void {
    this.resultSum = num;
  }



}
