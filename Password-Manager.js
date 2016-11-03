console.log("staring password manager");

var storage = require("node-persist");
storage.initSync();

storage.setItemSync('accounts', [{
	username: 'Rajan',
	balance: 100},{
	username: 'Vipin',
	balance: 200
}]);

var accounts = storage.getItemSync('accounts');

// push on a new accounts
accounts.push({
		username: 'Umakant',
		balance: 300
	});

//save using setItemSync
storage.setItemSync("accounts", accounts);

console.log(accounts);