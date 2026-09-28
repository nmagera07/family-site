const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const dataRouter = require('./data/data-router.js')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/info', dataRouter)

server.get('/', (req,res) => {
    res.status(200).json({ message: 'You are connected'})
})

if (require.main === module) {
    const PORT = process.env.PORT || 5000

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}!!`)
    })
}

module.exports = server
