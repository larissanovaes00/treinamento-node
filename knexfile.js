module.exports = {
  client: 'mysql',
  connection: {
    database: 'cinema',
    user: 'root',
    password: ''
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
