import {Component} from "@angular/core";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  noClick: boolean = false;
  message: string = 'No add person button clicked';
  message2:string = 'No people to show';
  title:string = 'Instructor';
  show:boolean = false;

  addPerson(): void {
    this.show = true;
    this.message = 'The person was added';
  }

  /*updateTitle(event: Event) {
    //this.title = (<HTMLInputElement>event.target).value;
    this.title = (event.target as HTMLInputElement).value;
  }*/
}
