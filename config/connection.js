// Dependencies
var Sequelize = require("sequelize");

var sequelize = new Sequelize("sequelize_burger", "root", "password"{
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "burgers_db"
});
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// Export connection for our ORM to use.
module.exports = connection;