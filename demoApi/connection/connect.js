var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        user: 'sa',
        password: 'Alaska2017',
        server: 'db1',
        database: 'TESTDB'
    });

    return conn;
};

module.exports = connect;
