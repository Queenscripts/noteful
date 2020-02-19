// require('dotenv').config();
// module.exports = {
//   "migrationDirectory": "migrations",
//   "driver": "pg",
//   "host": process.env.PROD_MIGRATION_DB_HOST,
//   "port": process.env.PROD_MIGRATION_DB_PORT,
//   "database": process.env.PROD_MIGRATION_DB_NAME,
//   "username": process.env.PROD_MIGRATION_DB_USER,
//   "password": process.env.PROD_MIGRATION_DB_PASS,
//   "ssl": true
// }

require('dotenv').config();

module.exports = {
  "migrationsDirectory": "migrations",
  "driver": "pg",
  "connectionString": (process.env.NODE_ENV === 'test')
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL,
    // "ssl": true,
    "sslmode": "allow",
    "validateChecksums": false, // Set to false to skip validation,
}