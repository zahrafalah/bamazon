var inquirer = require('inquirer');
var mysql = require('mysql');


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Mehrdadjoon5477",
  database: "bamazon"
});

// connection.connect(function(err) {
    // if (err) throw err;
    // console.log("connected as id " + connection.threadId + "\n");    
    // afterConnection()
// });

// function afterConnection() {
//     connection.query("SELECT * FROM products", function(err, res) {
//       if (err) throw err;
//       console.log(res);
//       connection.end();
//     });
// }



function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value);

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.';
	}
}


function promptUserPurchase() {
    // console.log('Enter promptUserPurchase');
    
    inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Item ID which you would like to purchase.',
			validate: validateInput,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many do you need?',
			validate: validateInput,
			filter: Number
        }
    ]).then(function(input) {
        var item = input.item_id;
        var quantity = input.quantity;

        var queryStr = 'SELECT * FROM products WHERE ?';

        connection.query(queryStr, {item_id: item}, function(err, data) {
            if (err) throw err;


            if (data.length === 0) {
				console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');
				displayInventory();

			} else {
                var productData = data[0];
                if (quantity <= productData.stock_quantity) {
					console.log('The product you requested is in stock!');

					// Construct the updating query string
					var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

					// Update the inventory
					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log('Your order has been placed! Your total is $' + productData.price * quantity);
						console.log('Thank you for shopping with us!');
						console.log("\r\n---------------------------------------------------------------------\r\n");

						
						connection.end();
                    })
                        } else {
                            console.log('Sorry! Insufficient quantity! Please modify your order.');
                            console.log("\r\n---------------------------------------------------------------------\r\n");

                            displayInventory();
                        }
                    }            
        })
    })
}

// promptUserPurchase();

function displayInventory() {
	// console.log('Enter displayInventory');

	// Construct db query string
	queryStr = 'SELECT * FROM products';

	// Make db query
	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('Existing Inventory: ');
		console.log('...................\r\n');

		var strOut = '';
		for (var i = 0; i < data.length; i++) {
			strOut = '';
			strOut += 'Item ID: ' + data[i].item_id + '  //  ';
			strOut += 'Product Name: ' + data[i].product_name + '  //  ';
			strOut += 'Price: $' + data[i].price + '\r\n';

			console.log(strOut);
		}

	  	console.log("---------------------------------------------------------------------\r\n");

	  	//Prompt
	  	promptUserPurchase();
	})
}
displayInventory();

