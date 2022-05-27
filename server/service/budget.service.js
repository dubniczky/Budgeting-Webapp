import { db, query, exec } from 'budget/database/database.js'
import BudgetItem from 'budget/model/budget-item.js'

function toBudget(qres) {
    return new BudgetItem(qres.id, qres.title, qres.c_value, qres.category)
}

function toBudgets(qres) {
    let budgets = []
    for (let b of qres) {
        budgets.push( new BudgetItem(b.id, b.title, b.c_value, b.category) )
    }
    return budgets
}


export function list() {
    return toBudgets( db.prepare('select * from budgets').all() )
}

export function get(id) {
    return toBudget( db.prepare('select * from budgets where id = ?').get(id) )
}

export function update(budget) {
    const res = db.prepare('update budgets set title = ?, c_value = ?, category = ? where id = ?')
        .run(budget.title, budget.value, budget.category, budget.id)
    return res
}

export function add(budget) {
    const res = db.prepare('INSERT INTO budgets (title, c_value, category) VALUES (?, ?, ?)')
        .run(budget.title, budget.value, budget.category)
    return res
}

export function stat() {
    return {
        income: db.prepare('select SUM(c_value) as s from budgets where c_value > 0').get().s,
        spending: -db.prepare('select SUM(c_value) as s from budgets where c_value < 0').get().s
    }
}


export default {
    list,
    get,
    add,
    update,
    stat
}