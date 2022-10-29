import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-formsum',
  templateUrl: './formsum.component.html',
  styleUrls: ['./formsum.component.css']
})
export class FormsumComponent {
  @Output() result = new EventEmitter<number>();
  numberA: number;
  numberB: number;

  sumValues(): void {
    this.result.emit(this.numberA + this.numberB);
  }

}
