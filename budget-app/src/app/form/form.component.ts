import {Component, OnInit} from '@angular/core';
import {IncomeService} from "../income/income.service";
import {ExpenditureService} from "../expenditure/expenditure.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  type: string = '';
  valueInput: number = 0;
  descriptionInput: string = '';

  constructor(private incomeService: IncomeService, private expenseService: ExpenditureService) {
  }

  ngOnInit(): void {
  }

  typeOperation(event: Event): void {
    this.type = (event.target as HTMLSelectElement).value;
  }

  addFields(): void {
    if (this.type === 'incomeOperation') {
      this.incomeService.addIncome(this.descriptionInput, this.valueInput);
    }
    if (this.type === 'expenditureOperation') {
      this.expenseService.addExpenditure(this.descriptionInput, this.valueInput);
    }
  }

}
