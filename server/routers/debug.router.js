import express from 'express'

const router = express.Router()

router.head('/headers', (req, res) => {
    res.send( req.headers )
})

export default router