const router = require('express').Router()

const Data = require('./data-model.js')

router.get('/', async (req,res) => {
    try {
        const data = await Data.getData()
        res.json(art)
    } catch (error) {
        res.status(500).json({ message: 'Failed to get data'})
    }
})







module.exports = router