var connection = require("../config/connection.js");

var orm = {
 selectAll: function (table, cb) {
     //SELECT statement
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err,res) {
        if (err){
            throw err;
        }
        cb(res);
    })
 }
}

//export orm Object to burger.js model
module.exports = orm;