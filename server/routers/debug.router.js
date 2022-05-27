import express from 'express'

const router = express.Router()

router.get('/headers', (req, res) => {
    res.send( req.headers )
})

router.post('/echo', (req, res) => {
    res.send( req.body )
})

export default router