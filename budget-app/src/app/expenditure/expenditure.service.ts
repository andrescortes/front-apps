import {Expenditure} from "./expenditure.model";

export class ExpenditureService {
  expenditures: Expenditure[] = [
    new Expenditure("Rent", 900),
    new Expenditure("Food", 200),
  ];

  deleteExpenditure(expenditure: Expenditure) {
    const index: number = this.expenditures.indexOf(expenditure);
    this.expenditures.splice(index, 1);
  }

  addExpenditure(descriptionInput: string, valueInput: number) {
    this.expenditures.push(new Expenditure(descriptionInput, valueInput));
  }
}
