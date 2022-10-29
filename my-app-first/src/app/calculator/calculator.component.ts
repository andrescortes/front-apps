import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  numberA: number = 0;
  numberB: number = 0;
  result: number = 0;

  sumValues(event: Event): void {
    this.result = this.numberA + this.numberB;
  }


}
