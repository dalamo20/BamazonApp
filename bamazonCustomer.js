/* Captains Log: I got as far as prompting the user for selecting an item and amount but could not think 
of how I will get the function to check the stock. I commented out 2 functions
that I planned on working with */

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

connection.connect(function (err) {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].product + " | " + res[i].price);
        }
        console.log("-----------------------------------");
    start();
    });
});

function start() {
    //create two empty variables to store the results of both questions
    var idSearch = "";
    var numBought = "";
    //then create two separate prompts that will have the results function in them
    //results function will be defined somewhere else

    inquirer.prompt([{
        name: "action",
        message: "Search Product By Id:"
    }]).then(function (res) {
        console.log(res);
        // searchById();

    inquirer.prompt([{
        name: "action",
        message: "How Many Would You Like To Buy?"
    }]).then(function(res) {
        console.log(res);
    });
    });
}



// function searchById() {
//     connection.query("SELECT id FROM products", function (err, res) {
//         if (err) throw err;
//         for (var i = 0; i < res.length; i++) {
//             console.log(res[i].id + " | " + res[i].product + " | " + res[i].price);
//         }
//         console.log("-----------------------------------");
//         start();
//     });
// }

//   function amountBought() {
//     connection.query("SELECT * FROM products", function(err, res) {
//         if (err) throw err;
//         for (var i = 0; i < res.length; i++) {
//           console.log(res[i].id + " | " + res[i].product + " | " + res[i].price);
//         }
//         console.log("-----------------------------------");
//         start();
//       });
//   }