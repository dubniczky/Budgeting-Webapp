import express from 'express'
import db from 'budget/database/database.js'

const router = express.Router()

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