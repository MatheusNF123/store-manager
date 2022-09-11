const mysql = require('mysql2/promise');

require('dotenv').config(); // não se esqueça de configurar suas variáveis de ambiente aqui na configuração

// const connection = mysql.createPool({
//   host: 'db',
//   user: 'root',
//   password: 'password',
//   database: 'StoreManager',
//   port: 3306,
// });

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE || 'StoreManager',
});

module.exports = connection;
