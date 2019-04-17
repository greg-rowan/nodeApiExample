var express = require('express');
var router = express.Router();
var sql = require('mssql');
var conn = require("../connection/connect")();

var routes = function()
{
    router.route('/')   // define route path
        .get(function(req, res)
        {
            conn.connect().then(function()   // connect to sql server
            {
                var sqlQuery = "SELECT * FROM PRODUCTS";   // hardd code query
                var req = new sql.Request(conn);
                req.query(sqlQuery).then(function(recordset)  // callback for getting records
                {
                    res.json(recordset.recordset);          // sending response in json format
                    conn.close();
                }).catch(function(err)          // catching any errors
                {
                    console.log(err);
                    conn.close();
                    res.status(400).send("Error while inserting data"); 
                })

            }).catch(function(err) {
                console.log(err);
                conn.close();
                res.status(400).send("Error while inserting data");
            });



        });
    return router;      // return router
};

module.exports = routes;    // export routes
