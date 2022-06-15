const db = require('../database/dbConfig.js')

module.exports = {
    getXmasData,
    addXmas,
    updateXmas,
    findByIdXmas,
    removeXmas,
    getFourthData,
    addFourth,
    updateFourth,
    findByIdFourth,
    removeFourth,
}


function addXmas(newData) {
    return db('xmas').insert(newData)
}

function getXmasData() {
    return db('xmas')
}

function updateXmas(changes, id) {
    return db('xmas').where({id}).update(changes)
}

function findByIdXmas(id) {
    return db('xmas').where({id})
}

function removeXmas(id) {
    return db('xmas').where({ id }).del()
}

function addFourth(newData) {
    return db('fourth').insert(newData)
}

function getFourthData() {
    return db('fourth')
}

function updateFourth(changes, id) {
    return db('fourth').where({id}).update(changes)
}

function findByIdFourth(id) {
    return db('fourth').where({id})
}

function removeFourth(id) {
    return db('fourth').where({ id }).del()
}