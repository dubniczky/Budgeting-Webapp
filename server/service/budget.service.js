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


export default {
    list,
    get
}