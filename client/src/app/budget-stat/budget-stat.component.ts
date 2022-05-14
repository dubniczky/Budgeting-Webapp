import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-stat',
  templateUrl: './budget-stat.component.html',
  styleUrls: ['./budget-stat.component.css']
})
export class BudgetStatComponent implements OnInit {

  totalSpend = 123
  totalIncome = 99

  constructor() { }

  ngOnInit(): void {
  }

}