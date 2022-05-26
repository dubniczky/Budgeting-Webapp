import express from 'express'

const app = express()

let list = [
    { id: 0, title: 'Groceries', value: 315.0, category: 'food' },
    { id: 1, title: 'Eating out', value: 50.0, category: 'food' },
    { id: 2, title: 'Rent', value: 900.0, category: 'housing' },
    { id: 3, title: 'Bills', value: 112.0, category: 'housing' },
    { id: 4, title: 'Car', value: 45.0, category: 'trasport' },
    { id: 4, title: 'Public Transport', value: 35.0, category: 'trasport' },
]

app.get('/api/budget/all', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*')
    res.json(list)
})

app.get('/api/budget/get/:id', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*')

    let id = req.params['id']
    res.json(list[id])
})


app.listen(8080, () => {
	console.log('listening')
})
