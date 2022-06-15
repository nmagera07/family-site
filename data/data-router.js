const router = require('express').Router()

const Xmas = require('./data-model.js')
const Fourth = require('./data-model.js')

router.get('/xmas', async (req,res) => {
    try {
        const data = await Xmas.getXmasData()
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: 'Failed to get data'})
    }
})

router.post('/xmas', async (req, res) => {
    const body = req.body

    try {
        const data = await Xmas.addXmas(body)
        const newData = {id: data[0], ...body}
        res.status(201).json(newData)
    } catch (error) {
        res.status(500).json({ message: 'Failed to add data'})
    }
})

router.delete('/xmas/:id', async (req, res) => {
    const { id } = req.params

    try {
        const deleted = await Xmas.removeXmas(id)
        const edited = await Xmas.getXmasData()

        if (deleted) {
            console.log(edited)
            res.json(edited)
        } else {
            res.status(404).json({ message: 'Could not find the correct data'})
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete data'})
    }
})

router.get('/fourth', async (req,res) => {
    try {
        const data = await Fourth.getFourthData()
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: 'Failed to get data'})
    }
})

router.post('/fourth', async (req, res) => {
    const body = req.body

    try {
        const data = await Fourth.addFourth(body)
        const newData = {id: data[0], ...body}
        res.status(201).json(newData)
    } catch (error) {
        res.status(500).json({ message: 'Failed to add data'})
    }
})

router.delete('/fourth/:id', async (req, res) => {
    const { id } = req.params

    try {
        const deleted = await Fourth.removeFourth(id)
        const edited = await Fourth.getFourthData()

        if (deleted) {
            console.log(edited)
            res.json(edited)
        } else {
            res.status(404).json({ message: 'Could not find the correct data'})
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete data'})
    }
})



module.exports = router