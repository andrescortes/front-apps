import {Component, Input, OnInit} from '@angular/core';
import {Expenditure} from "./expenditure.model";
import {ExpenditureService} from "./expenditure.service";

@Component({
  selector: 'app-expenditure',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.css']
})
export class ExpenditureComponent implements OnInit {

  expenditures: Expenditure[] = [];
  @Input() totalExpenditure: number;

  constructor(private expenditureService: ExpenditureService) {
  }

  ngOnInit(): void {
    this.expenditures = this.expenditureService.expenditures;
  }

  calculatePercentage(expenditure: Expenditure) {
    return expenditure.amount / this.totalExpenditure;
  }

  deleteExpenditure(expenditure: Expenditure) {
    this.expenditureService.deleteExpenditure(expenditure);
  }

}
