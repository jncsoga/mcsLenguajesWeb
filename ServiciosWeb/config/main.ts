const config = {

    // puerto
    port: process.env.PORT || 3000,

    // database
    db: 'mongodb://localhost/productos',
    dbparams: {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    },

    test_env: 'test',
    test_db: 'mongodb://localhost/productos-test',
    test_port: 3001
}

export default config;