import {Component, OnInit} from '@angular/core';
import {Income} from "./income/income.model";
import {Expenditure} from "./expenditure/expenditure.model";
import {IncomeService} from "./income/income.service";
import {ExpenditureService} from "./expenditure/expenditure.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'budget-app';
  incomes: Income[] = [];
  expenditures: Expenditure[] = [];

  constructor(private incomeService: IncomeService, private expenditureService: ExpenditureService) {
    this.incomes = incomeService.incomes;
    this.expenditures = expenditureService.expenditures;
  }

  getTotalIncome(): number {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  }

  getTotalExpenditure(): number {
    return this.expenditures.reduce((total, expenditure) => total + expenditure.amount, 0);
  }

  getPercentage(): number {
    return this.getTotalExpenditure() / this.getTotalIncome();
  }

  getRemaining(): number {
    return this.getTotalIncome() - this.getTotalExpenditure();
  }

  ngOnInit(): void {

  }
}


