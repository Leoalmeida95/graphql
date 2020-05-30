
module.exports = {
    client: 'mysql',
    connection: {
      host : 'db',
      port: 3306,
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
