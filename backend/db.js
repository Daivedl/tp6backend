const Sequelize = require('sequelize');
const InstrumentoModel = require('./models/instrumento');

const sequelize = new Sequelize('V98rPU1VQk','V98rPU1VQk','NbmXZZKOt6',{
    host: 'remotemysql.com',
    dialect: 'mysql'
});

const Instrumento = InstrumentoModel(sequelize, Sequelize);

sequelize.sync({force: false})
.then(() => {
    console.log('Tablas sincronizadas');
})

module.exports = {
    Instrumento
}
