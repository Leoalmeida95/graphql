// Update with your config settings.

module.exports = {
    client: 'mysql',
    connection: {
      host : 'db',
      database: 'test',
      user:     'root',
      password: 'your_passwd'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
