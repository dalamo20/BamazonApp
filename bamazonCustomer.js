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
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].id + " | " + res[i].product + " | " + res[i].price);
        }
        console.log("-----------------------------------");
        start();
      });
  });

  function start() {
    inquirer.prompt([{
        name: "action",
        message: "Search Product By Id:"
    }, {
        name: "action",
        message: "How Many Would You Like To Buy?"
    
    }]).then(function (res){
        switch (res.action) {
            case "Search Product By Id:":
            searchById();
            break;
            case "How Many Would You Like To Buy?":
            amountBought();
            default:
            connection.end();
            break;
        }
    });
  }