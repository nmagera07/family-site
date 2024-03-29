require('dotenv').config();

module.exports = {
  // development: {
  //   client: 'sqlite3',
  //   useNullAsDefault: true,
  //   connection: {
  //     filename: './database/data.db3',
  //   },
  //   pool: {
  //     afterCreate: (conn, done) => {
  //       conn.run('PRAGMA foreign_keys = ON', done);
  //     },
  //   },
  //   migrations: {
  //     directory: './database/migrations',
  //   },
  //   seeds: {
  //     directory: './database/seeds',
  //   },
  // },
   production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      },
    },
    useNullAsDefault: true,
    pool: {
      min: 0,
      max: 30,
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
  },
};