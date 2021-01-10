
exports.up = function (knex) {
  return knex.schema.createTable('filmes', table => {
    table.increments('id').primary()
    table.string('titulo').notNull()
    table.string('sinopse').notNull()
    table.string('genero').notNull()
    table.string('faixa_etaria').notNull()
    table.string('capa').notNull()
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('filmes')
};
