const mysql = require ('mysql2');

module.exports = ()=> {
    return mysql.createConnection({
        host: 'localhost', //si es en la web poner la direccion IP
        user:'root',
        password:'30095190',
        database: 'libreria2'
    });
}