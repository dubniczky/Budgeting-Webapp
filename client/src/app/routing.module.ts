import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BudgetListComponent } from "./budget-list/budget-list.component";
import { BudgetFormComponent } from "./budget-form/budget-form.component";
import { BudgetStatComponent } from "./budget-stat/budget-stat.component";
import { BudgetEditComponent } from "./budget-edit/budget-edit.component";

const routes: Routes = [
  {
    path: "",
    component: BudgetStatComponent,
  },
  {
    path: "list",
    component: BudgetListComponent,
  },
  {
    path: "budget/new",
    component: BudgetFormComponent,
  },
  {
    path: "budget/:id",
    component: BudgetEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}