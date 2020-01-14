
exports.up = function(knex) {
  return knex.schema.createTable('data', tbl => {
    tbl.increments()

    tbl.string('name').notNullable()
    tbl.string('guests').notNullable()
    tbl.string('dishes').notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('data')
        .dropTableIfExists('data')
};
