import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BudgetStatsComponent } from './budget-stats/budget-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent,
    BudgetFormComponent,
    BudgetStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
