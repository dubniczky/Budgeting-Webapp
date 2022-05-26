import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { BudgetItem } from '../budget-item'
import { BudgetService } from '../budget.service'


@Component({
  selector: 'app-budget-edit',
  templateUrl: './budget-edit.component.html',
  styleUrls: ['./budget-edit.component.css'],
  providers: [BudgetService]
})
export class BudgetEditComponent implements OnInit {

  item: BudgetItem

  form = this.fb.group({
    title: [ '', [Validators.required, Validators.pattern(/^(\d|\w|\s){1,64}$/)] ],
    value: ['', [Validators.required] ],
    category: [ '', [Validators.required, Validators.pattern(/^(\d|\w|\s){1,64}$/)] ],
  });

  constructor(private route: ActivatedRoute, private budgetService: BudgetService, private fb: FormBuilder, private router:Router) {
    this.item = new BudgetItem
  }

  get title() { return this.form.get('title') }
  get value() { return this.form.get('value') }
  get category() { return this.form.get('category') }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      if (params['id'] == null) return

      let id = params['id']
      this.item = await this.budgetService.get(id)
      console.log(this.item)

      this.form.patchValue({
        title: this.item.title,
        value: this.item.value,
        category: this.item.category
      })
    });
  }

  async onSubmit() {
    let budgetItem = new BudgetItem(
      this.form.value.title,
      this.form.value.value,
      this.form.value.category
    )
    budgetItem.id = this.item.id

    let item = await this.budgetService.edit(budgetItem)
    if (item == null) {
      console.log('Error editing item')
      return
    }

    this.router.navigate(['/', 'list'])
  }
}
