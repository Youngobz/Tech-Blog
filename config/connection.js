const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    port: process.env.API_PORT,
  }
);

module.exports = sequelize;
