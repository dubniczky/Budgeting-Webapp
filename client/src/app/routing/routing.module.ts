import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BudgetListComponent } from "../budget-list/budget-list.component";
import { BudgetFormComponent } from "../budget-form/budget-form.component";
import { BudgetStatComponent } from "../budget-stat/budget-stat.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/issues",
    pathMatch: "full",
  },
  {
    path: "issues",
    component: IssueListComponent,
  },
  {
    path: "issues/new",
    component: IssueFormComponent,
  },
  {
    path: "issues/:id",
    component: IssueDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}