import fs from 'fs'
import sqlite from 'better-sqlite3'

const dbpath = 'db.sqlite'
const migrate = false

if (!fs.existsSync(dbpath)) {
    migrate = true
}

const db = new sqlite(dbpath)

export function query(sql, ... params) {
    db.prepare(sql).all(params)
}

export function migrate() {
    const sql = fs.readFileSync('database/budget.create.sql')
    db.exec(sql)
}