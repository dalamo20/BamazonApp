var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
  });
  
  connection.connect(function(err) {
    connection.query("SELECT * FROM products", function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].id + " | " + res[i].product + " | " + res[i].department + " | " + res[i].price + " | " + res[i].stock);
        }
        console.log("-----------------------------------");
      });
  });

//   function start() {
//     prompt.inquirer([{
//         name: "action",
//         message: "Search Product By Id:",
//         type: "list"
//     }]).then(function (){});
//   }