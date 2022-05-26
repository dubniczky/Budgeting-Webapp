import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BudgetStatComponent } from './budget-stat/budget-stat.component';
import { BudgetEditComponent } from './budget-edit/budget-edit.component';
import { AboutInfoComponent } from './about-info/about-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetListComponent,
    BudgetFormComponent,
    BudgetStatComponent,
    BudgetEditComponent,
    AboutInfoComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
