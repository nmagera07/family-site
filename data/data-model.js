const db = require('../database/dbConfig.js')

module.exports = {
    getData,
    add,
    update,
    findById,
    remove
}


function add(newData) {
    return db('xmas').insert(newData)
}

function getData() {
    return db('xmas')
}

function update(changes, id) {
    return db('xmas').where({id}).update(changes)
}

function findById(id) {
    return db('xmas').where({id})
}

function remove(id) {
    return db('xmas').where({ id }).del()
}

function add(newData) {
    return db('fourth').insert(newData)
}

function getData() {
    return db('fourth')
}

function update(changes, id) {
    return db('fourth').where({id}).update(changes)
}

function findById(id) {
    return db('fourth').where({id})
}

function remove(id) {
    return db('fourth').where({ id }).del()
}