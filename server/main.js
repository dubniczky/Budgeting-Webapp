import express from 'express'

import { allowCors } from 'budget/middleware/cors.js'

const app = express()
app.use(express.json())
app.use(allowCors)

let list = [
    { id: 0, title: 'Groceries', value: -315.0, category: 'food' },
    { id: 1, title: 'Eating out', value: -50.0, category: 'food' },
    { id: 2, title: 'Rent', value: -900.0, category: 'housing' },
    { id: 3, title: 'Bills', value: -112.0, category: 'housing' },
    { id: 4, title: 'Car', value: -45.0, category: 'trasport' },
    { id: 5, title: 'Public Transport', value: -35.0, category: 'trasport' },
    { id: 5, title: 'Salary', value: 5500, category: 'job' },
    { id: 5, title: 'Benefits', value: 150, category: 'job' },
]

app.options('*', (req, res) => {
    res.sendStatus(200)
})

app.get('/api/budget/all', (req, res) => {
    res.json(list)
})

app.get('/api/stats', (req, res) => {
    let spend = 0
    let income = 0

    for (let i of list) {
        let val = i.value
        if (val > 0) {
            income += val
        }
        else {
            spend += -val
        }
    }

    res.json({
        income: income,
        spending: spend
    })
})

app.get('/api/budget/get/:id', (req, res) => {
    let id = req.params['id']
    res.json(list[id])
})

app.patch('/api/budget', (req, res) => {
    let id = req.body.id
    if (id == null) {
        return res.sendStatus(400)
    }


    res.json(list[id])
})

app.post('/api/budget/new', (req, res) => {
    let item = req.body
    console.log(item)
    item.id = list.length
    list.push(item)

    res.send({ok:1, id:item.id})
})

app.listen(8080, () => {
	console.log('listening')
})
