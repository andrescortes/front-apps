import {Income} from "./income.model";

export class IncomeService {
  incomes: Income[] = [
    new Income("Salary", 4000),
    new Income("Bonus", 500),
  ];

  deleteIncome(income: Income) {
    console.log("Deleting income: " + income.description);
    const index: number = this.incomes.indexOf(income);
    this.incomes.splice(index, 1);
  }

  addIncome(description: string, amount: number) {
    console.log("Adding income: " + description + " " + amount);
    this.incomes.push(new Income(description, amount));
  }
}
