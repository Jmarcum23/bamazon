var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Gingerjo1!",
  database: "bamazon_DB"
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId);
	readProducts();
});

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement

    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock);
    }
    console.log("-----------------------------------");
    startPurchase();
  });
}

function startPurchase(){
	inquirer
	.prompt([
	{
      type: "id",
      name: "input",
      message: "What product id would you like to purchase?"
	},
	{
      type: "qty",
      name: "input",
      message: "What quantity would you like to purchase?"
	}
	]).then(function(input) {
		var item = input.id;
		var quantity = input.qty;
		completePurchase(item, quantity);
	});
}

function completePurchase(err, res){


}