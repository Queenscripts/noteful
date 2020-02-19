module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DB_URL || 'postgresql://dunder@localhost/noteful',
    TEST_DB_URL: process.env.TEST_DB_URL || 'postgresql://dunder@localhost/noteful-test'
}

 /* "migrate-production": "postgrator --config postgrator-production-config.js",*/