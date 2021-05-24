const router = require('express').Router()

const Data = require('./data-model.js')
const Fourth = require('./data-model.js')

router.get('/xmas', async (req,res) => {
    try {
        const data = await Data.getData()
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: 'Failed to get data'})
    }
})

router.post('/xmas', async (req, res) => {
    const body = req.body

    try {
        const data = await Data.add(body)
        const newData = {id: data[0], ...body}
        res.status(201).json(newData)
    } catch (error) {
        res.status(500).json({ message: 'Failed to add data'})
    }
})

router.delete('/xmas/:id', async (req, res) => {
    const { id } = req.params

    try {
        const deleted = await Data.remove(id)
        const edited = await Data.getData()

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
        const data = await Fourth.getData()
        res.json(data)
    } catch (error) {
        res.status(500).json({ message: 'Failed to get data'})
    }
})

router.post('/fourth', async (req, res) => {
    const body = req.body

    try {
        const data = await Fourth.add(body)
        const newData = {id: data[0], ...body}
        res.status(201).json(newData)
    } catch (error) {
        res.status(500).json({ message: 'Failed to add data'})
    }
})

router.delete('/fourth/:id', async (req, res) => {
    const { id } = req.params

    try {
        const deleted = await Fourth.remove(id)
        const edited = await Fourth.getData()

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