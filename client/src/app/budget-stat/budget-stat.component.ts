import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service'

@Component({
  selector: 'app-budget-stat',
  templateUrl: './budget-stat.component.html',
  styleUrls: ['./budget-stat.component.css']
})
export class BudgetStatComponent implements OnInit {

  totalSpend = 123
  totalIncome = 99

  constructor(private budgetService: BudgetService) { }

  async ngOnInit() {
    let stat = await this.budgetService.stats()
    this.totalSpend = stat.spending
    this.totalIncome = stat.income
  }

}
