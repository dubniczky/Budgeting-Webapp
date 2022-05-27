import express from 'express'

import { allowCors } from 'budget/middleware/cors.js'
import config from 'budget/module/config.js'
import budgetDb from 'budget/service/budget.service.js'

import debugRouter from 'budget/routers/debug.router.js'
import budgetRouter from 'budget/routers/budget.router.js'

// Create server
const app = express()


// Install middleware
app.use(express.json())
app.use(allowCors)


// Install routers
if (config.debug) app.use('/debug', debugRouter)
app.use('/api/budget', budgetRouter)


// Respond with CORS headers when the browser is doing preliminary checks
app.options('*', (req, res) => {
    res.sendStatus(200)
})
app.head('*', (req, res) => {
    res.sendStatus(200)
})

app.get('/api/stats', (req, res) => {
    return res.json( budgetDb.stat() )
})


// Starting server
app.listen(config.port, () => {
	console.log('Listening on:', config.port)
})
