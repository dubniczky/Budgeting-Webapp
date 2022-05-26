import express from 'express'

const router = express.Router()

let list = [
    { id: 0, title: 'Groceries', value: -315.0, category: 'food' },
    { id: 1, title: 'Eating out', value: -50.0, category: 'food' },
    { id: 2, title: 'Rent', value: -900.0, category: 'housing' },
    { id: 3, title: 'Bills', value: -112.0, category: 'housing' },
    { id: 4, title: 'Car', value: -45.0, category: 'trasport' },
    { id: 5, title: 'Public Transport', value: -35.0, category: 'trasport' },
    { id: 6, title: 'Salary', value: 5500, category: 'job' },
    { id: 7, title: 'Benefits', value: 150, category: 'job' },
]

router.get('/', (req, res) => {
    res.json(list)
})

router.patch('/', (req, res) => {
    let id = req.body.id
    if (id == null) {
        return res.sendStatus(400)
    }

    list[id] = req.body // TODO

    res.json({ ok:1 })
})

router.post('/', (req, res) => {
    let item = req.body
    console.log(item)
    item.id = list.length
    list.push(item)

    res.send({ok:1, id:item.id})
})

router.get('/:id', (req, res) => {
    let id = req.params['id']
    res.json(list[id])
})

export default router