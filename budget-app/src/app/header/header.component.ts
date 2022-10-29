import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() budget: number = 0;
  @Input() totalIncome: number = 0;
  @Input() totalExpenditure: number = 0;
  @Input() totalPercentage: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

}
