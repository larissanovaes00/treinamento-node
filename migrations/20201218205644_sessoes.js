
exports.up = function (knex) {
  return knex.schema.createTable('sessoes', table => {
    table.increments('id').primary()
    table.time('horario').notNull()
    table.decimal('duracao').notNull()
    table.date('lancamento').notNull()
    table.date('final').notNull()
    table.integer('fk_filme').notNull()
    table.foreign('fk_filme').references('id').inTable('filmes')
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('sessoes')
};
