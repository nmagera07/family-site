
exports.up = function(knex) {
  return knex.schema.createTable('easter', tbl => {
    tbl.increments()

    tbl.string('name').notNullable()
    tbl.string('guests').notNullable()
    tbl.string('dishes').notNullable()
  })
  .createTable('letender', tbl => {
    tbl.increments()

    tbl.string('name').notNullable()
    tbl.string('guests').notNullable()
    tbl.string('dishes').notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('letender')
        .dropTableIfExists('easter')
};
