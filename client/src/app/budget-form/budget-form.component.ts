import { Component, OnChanges, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { BudgetItem } from '../budget-item';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit {

  @Output() save = new EventEmitter<BudgetItem>();

  budgetForm = this.fb.group({
    title: [ '', [Validators.required, Validators.pattern(/^(\d|\w|\s){1,64}$/)] ],
    value: ['', [Validators.required] ],
    category: [ '', [Validators.required, Validators.pattern(/^(\d|\w|\s){1,64}$/)] ],
  });

  constructor(private fb: FormBuilder) { }

  get title() { return this.budgetForm.get('title') }
  get value() { return this.budgetForm.get('value') }
  get category() { return this.budgetForm.get('category') }

  ngOnInit(): void {
  }

  onSubmit() {
    let budgetItem = new BudgetItem(
      this.budgetForm.value.title,
      this.budgetForm.value.value,
      this.budgetForm.value.category)

    this.save.emit(budgetItem);
  }

}
