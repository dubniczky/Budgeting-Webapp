import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BudgetItem } from './budget-item';
import { lastValueFrom, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  })
};

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private urls = {
    new: '/api/v1/budget/new',
    get: '/api/v1/budget/get',
    all: '/api/v1/budget/all'
  }

  constructor(private http: HttpClient) { }

  get(id: number): Promise<BudgetItem> {
    let obs = this.http.get<BudgetItem>(`${this.urls.get}/${id}`)
    return lastValueFrom(obs);
  }

  all(): Promise<BudgetItem[]> {
    let obs = this.http.get<BudgetItem[]>(`${this.urls.all}}`)
    return lastValueFrom(obs);
  }
}
