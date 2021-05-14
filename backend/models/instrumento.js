
const { DataTypes} = require("sequelize"); // Import the built-in data types

module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('instrumento',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        instrumento: DataTypes.STRING,
        marca: DataTypes.STRING,
        modelo: DataTypes.STRING,
        imagen: DataTypes.BLOB,
        precio: DataTypes.INTEGER,
        costoEnvio: DataTypes.STRING,
        cantidadVendida: DataTypes.INTEGER,
        descripcion: DataTypes.STRING
    })
}