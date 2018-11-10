var connection = require("../config/connection.js");

var orm = {
 selectAll: function (table, cb) {
     //SELECT statement
    var queryString = "SELECT * FROM" + table + ";";
    connection.queryString(queryString, function(err,res) {
        if (err){
            throw err;
        }
        cb(res);
    })
 }
}

module.exports = orm;