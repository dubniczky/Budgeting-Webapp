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
    new: 'http://127.0.0.1:8080/api/budget/new',
    get: 'http://127.0.0.1:8080/api/budget/get',
    all: 'http://127.0.0.1:8080/api/budget/all'
  }

  constructor(private http: HttpClient) { }

  get(id: number): Observable<BudgetItem> {
    let obs = this.http.get<BudgetItem>(`${this.urls.get}/${id}`)
    return obs
    //return lastValueFrom(obs);
  }

  async all(): Promise<BudgetItem[]> {
    let obs = this.http.get<BudgetItem[]>(`${this.urls.all}`)
    let list = await lastValueFrom(obs)
    let items: BudgetItem[] = []

    for (let b of list) {
      let item = new BudgetItem()

      item.id = b.id
      item.title = b.title
      item.category = b.category
      item.value = b.value

      items.push(item)
    }

    return items
  }
}
