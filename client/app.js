// Controller is used for all php communication
class Controller {
    constructor() {}

    // Test function
    grabData() {
        $.ajax({
            url: 'server/login.php',
            type: 'GET',
            success: function(data, status) {
                // DO WORK
                console.log(data);
                if (data) {
                    console.log("logged in!");
                } else {
                    console.log("try again buster");
                }
            },
            error: function(xhr, desc, err) {
                console.log("Details: " + desc);
                console.log("Error: " + err);
            }
        });
    }

    // Account Creation
    createAccount() {
        console.log('creating account...');
    }

    // Login
    login() {
        console.log('logging in...');
    }

    // API call for stock (Parameter:array)
    stockData(arr) {

    }
}
// Main is used to establish all objects and cookies
class Main {
	constructor () {
		// Create new instance of controller class (DB Connection)
		this.controller = new Controller();

		// Create new instance of API calls
		// this.api = new Api();
	}
}
/* Event Handlers */
const main = new Main();
(_ => {
	$(document).on('click', '#login-btn', function () {
		main.controller.grabData();
	})
})();