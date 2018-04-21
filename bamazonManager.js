var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "bamazon"
  });


function promptManagerAction() {
	// console.log('Enter promptManager');
	inquirer.prompt([
		{
			type: 'list',
			name: 'option',
			message: 'Please select an option:',
			choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product'],
			filter: function (val) {
				if (val === 'View Products for Sale') {
					return 'sale';
				} else if (val === 'View Low Inventory') {
					return 'lowInventory';
				} else if (val === 'Add to Inventory') {
					return 'addInventory';
				} else if (val === 'Add New Product') {
					return 'newProduct';
				} else {
					
					console.log('ERROR: Unreachable!');
					exit(1);
				}
			}
		}
	]).then(function(input) {

		// Trigger the appropriate action based on the user input
		if (input.option ==='sale') {
			displayInventory();
		} else if (input.option === 'lowInventory') {
			displayLowInventory();
		} else if (input.option === 'addInventory') {
			addInventory();
		} else if (input.option === 'newProduct') {
			createNewProduct();
		} else {
			// This case should be unreachable
			console.log('ERROR: Unreachable!');
			exit(1);
		}
	})
}

// promptManagerAction();

function displayInventory() {
    // console.log('Enter displayInventory');
}

function displayLowInventory() {
    // console.log('Enter displayLowInventory');
}

function addInventory() {
    // console.log('Enter addInventory');
}

function createNewProduct() {
    // console.log('Enter createNewProduct');
}

promptManagerAction();





