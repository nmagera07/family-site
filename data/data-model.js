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
    getEasterData,
    addEaster,
    updateEaster,
    findByIdEaster,
    removeEaster,
    getLetenderData,
    addLetender,
    updateLetender,
    findByIdLetender,
    removeLetender,
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

function addEaster(newData) {
    return db('easter').insert(newData)
}

function getEasterData() {
    return db('easter')
}

function updateEaster(changes, id) {
    return db('easter').where({id}).update(changes)
}

function findByIdEaster(id) {
    return db('easter').where({id})
}

function removeEaster(id) {
    return db('easter').where({ id }).del()
}

function addLetender(newData) {
    return db('letender').insert(newData)
}

function getLetenderData() {
    return db('letender')
}

function updateLetender(changes, id) {
    return db('letender').where({id}).update(changes)
}

function findByIdLetender(id) {
    return db('letender').where({id})
}

function removeLetender(id) {
    return db('letender').where({ id }).del()
}