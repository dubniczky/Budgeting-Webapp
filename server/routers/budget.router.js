import express from 'express'
import db from 'budget/service/budget.service.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.json( db.list() )
})

router.get('/:id', (req, res) => {
    res.json( db.get(req.params['id']) )
})

router.patch('/', (req, res) => {
    let id = req.body.id
    if (id == null) {
        return res.sendStatus(400)
    }

    db.update(req.body)

    res.json({ ok:1 })
})

router.post('/', (req, res) => {
    let item = req.body
    console.log(item)
    item.id = list.length
    list.push(item)

    res.send({ok:1, id:item.id})
})

export default router