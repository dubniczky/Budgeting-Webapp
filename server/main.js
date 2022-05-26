import express from 'express'

import { allowCors } from 'budget/middleware/cors.js'
import budgetRouter from 'budget/routers/budget.router.js'


const PORT = 8080

const app = express()


// Install middleware
app.use(express.json())
app.use(allowCors)


// Install routers
app.use('/api/budget', budgetRouter)


// Respond with CORS headers when the browser is doing preliminary checks
app.options('*', (req, res) => {
    res.sendStatus(200)
})
app.head('*', (req, res) => {
    res.sendStatus(200)
})


// Echo headers (debug)
app.head('/headers', (req, res) => {
    res.send( req.headers )
})

app.get('/api/stats', (req, res) => {
    let list = []
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

    return res.json({
        income: income,
        spending: spend
    })
})


// Starting server
app.listen(PORT, () => {
	console.log('Listening on:', PORT)
})
