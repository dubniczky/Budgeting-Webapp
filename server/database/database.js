import fs from 'fs'
import path from 'path'
import sqlite from 'better-sqlite3'

import BudgetItem from 'budget/model/budget-item.js'
import config from 'budget/module/config.js'

let clean = false

if (!fs.existsSync(config.database.path)) {
    clean = true
}

console.log('Opening database', config.database.path)
const db = new sqlite(config.database.path)

if (clean) {
    if (config.database.migrate) migrate()
    if (config.database.seed) seed()
}

export function query(sql, params) {
    return db.prepare(sql).all(params)
}

export function exec(sql, params) {
    return db.prepare(sql).run(params)
}

export function migrate() {
    const file = path.resolve('database/budget.create.sql')
    const sql = fs.readFileSync( file, 'utf8' )
    db.exec(sql)
}

export function seed() {
    let budgets = [
        { id: 0, title: 'Groceries', value: -315.0, category: 'food' },
        { id: 1, title: 'Eating out', value: -50.0, category: 'food' },
        { id: 2, title: 'Rent', value: -900.0, category: 'housing' },
        { id: 3, title: 'Bills', value: -112.0, category: 'housing' },
        { id: 4, title: 'Car', value: -45.0, category: 'trasport' },
        { id: 5, title: 'Public Transport', value: -35.0, category: 'trasport' },
        { id: 6, title: 'Salary', value: 5500, category: 'job' },
        { id: 7, title: 'Benefits', value: 150, category: 'job' },
    ]

    for (let b of budgets) {
        exec('INSERT INTO budgets (title, c_value, category) VALUES (?, ?, ?)',
            [b.title, b.value, b.category])
    }
}

export function toBudgets(qres) {
    let budgets = []
    for (let b of budgets) {
        budgets.push( new BudgetItem(b.id, b.title, b.c_value, b.category) )
    }
    return budgets
}

export default {
    db,
    query,
    exec,
    toBudgets
}