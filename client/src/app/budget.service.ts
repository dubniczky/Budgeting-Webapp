import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BudgetItem } from './budget-item';
import { lastValueFrom, Observable } from 'rxjs';
import { Stat } from '../app/stat'

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
    all: 'http://127.0.0.1:8080/api/budget/all',
    stat: 'http://127.0.0.1:8080/api/stats'
  }

  constructor(private http: HttpClient) { }

  async get(id: number): Promise<BudgetItem> {
    let obs = this.http.get<BudgetItem>(`${this.urls.get}/${id}`)
    let budget = await lastValueFrom(obs)
    let item = new BudgetItem()

    item.id = budget.id
    item.title = budget.title
    item.category = budget.category
    item.value = budget.value

    return item
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

  async stats(): Promise<Stat> {
    let obs = this.http.get<Stat>(`${this.urls.stat}`)
    let stat = await lastValueFrom(obs)
    return stat
  }

  async new(be: BudgetItem): Promise<BudgetItem|null> {
    try {
      let obs = this.http.post<BudgetItem>(`${this.urls.new}`, be)
      let res = await lastValueFrom(obs)
      return res
    } catch (error) {
      console.log(error)
      return null
    }
  }
}
