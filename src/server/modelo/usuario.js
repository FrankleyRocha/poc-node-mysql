const Sequelize = require('sequelize');
const { sequelize } = require('../util/db');
 
const Usuario = sequelize.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    // preco: {
    //     type: Sequelize.DOUBLE
    // },
    // descricao: Sequelize.STRING
})
 
module.exports = Usuario;