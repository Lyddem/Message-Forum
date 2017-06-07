var mysql = require('mysql');
var config = require('./config.js');

var connection = mysql.createConnection(config);

var getMessage = function (callback) {
	connection.query ('SELECT * from messages', (err, results, field) => {
		if(err) {
			return callback(err, null)
		} else {
			return callback (null, results)
		}
	})
}

var postMessage = function (data, cb) {
	var query = `INSERT INTO messages (author, message) VALUES ('${data.author}', '${data.message}')`;
	connection.query(query, (err, data, fields) => {
		if (err) {
			console.log('err', err)
			cb (err, false)
		} else {
			console.log('success adding post!');
			cb (null, true);
		}
	})
}

module.exports.getMessage = getMesage;
module.exports.postMessage = postMessage;