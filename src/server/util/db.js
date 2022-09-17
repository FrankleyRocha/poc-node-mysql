const config = require('./config');
const Sequelize = require('sequelize');

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    
    const connection = await mysql.createConnection(`mysql://${config.db_user}:${config.db_password}@${config.db_hostname}:${config.db_port}/${config.db_databasename}`);
    
    global.connection = connection;
    return connection;
}

async function query(sql){
    const conn = await connect();
    const [rows] = await conn.query(sql);
    return rows;
}

const sequelize = new Sequelize(config.db_databasename, config.db_user, config.db_password, {dialect: 'mysql', host: config.db_hostname});

module.exports = {query, sequelize};