import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { BudgetItem } from '../budget-item'
import { BudgetService } from '../budget.service'

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css'],
  providers: [BudgetService]
})
export class BudgetListComponent implements OnInit {
  items: BudgetItem[]

  constructor(private budgetService: BudgetService) {
    this.items = [
      new BudgetItem('Groceries', 315.0, 'food'),
      new BudgetItem('Eating out', 50.0, 'food'),
      new BudgetItem('Rent', 900.0, 'housing'),
      new BudgetItem('Bills', 112.0, 'housing'),
      new BudgetItem('Car', 45.0, 'trasport'),
      new BudgetItem('Public Transport', 35.0, 'trasport'),
    ]
  }

  async ngOnInit() {
    this.items = await this.budgetService.all();
  }

}
