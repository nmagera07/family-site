
exports.up = function(knex) {
  return knex.schema.createTable('xmas', tbl => {
    tbl.increments()

    tbl.string('name').notNullable()
    tbl.string('guests').notNullable()
    tbl.string('dishes').notNullable()
  })
  .createTable('fourth', tbl => {
    tbl.increments()

    tbl.string('name').notNullable()
    tbl.string('guests').notNullable()
    tbl.string('dishes').notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('fourth')
        .dropTableIfExists('xmas')
};
