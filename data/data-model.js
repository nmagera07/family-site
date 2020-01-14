const db = require('../database/dbConfig.js')

module.exports = {
    getData,
    add,
    update,
    findById,
    remove
}


function add(newData) {
    return db('data').insert(newData)
}

function getData() {
    return db('data')
}

function update(changes, id) {
    return db('data').where({id}).update(changes)
}

function findById(id) {
    return db('data').where({id})
}

function remove(id) {
    return db('data').where({ id }).del()
}