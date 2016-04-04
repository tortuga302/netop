
module.exports = {

    Books: function () {
       var squel = require("squel");
        var mysql = require('mysql');
        var data = {
            "name": "no data found"
        };
        /////dbconection

        var conn = mysql.createConnection({
            host: 'localhost'
            , user: 'root'
            , password: ''
            , database: 'vl_net'
        });

        var pool = mysql.createPool({
            connectionLimit: 100
            , host: 'localhost'
            , user: 'root'
            , password: ''
            , database: 'vl_net'
            , debug: false
        });

        this.getData = function (callback) {
            pool.getConnection(function (err, connection) {
                // Use the connection   
                c = connection;
                connection.query('SELECT * FROM books', function (err, rows) {
                    // And done with the connection.
                    connection.release();
                    if (!err) {
                        console.log('First book  is: ', rows[0].name, callback);
                        data = JSON.stringify(rows);;
                        //response.end();
                        callback(data);
                    }
                });
            });

        }

        this.updateData = function (data) {
            pool.getConnection(function (err, connection) {
                console.log('data  ' + data);
               
                var queryUpdateStr = squel.update()
                    .table("books")
                    .set("name", data.name)
                    .set("author", data.author)
                    .set("pages", data.pages)
                    .set("type", data.type)
                    .where("id=" + data.id)
                    .toString();
                console.log(queryUpdateStr);
                connection.query(queryUpdateStr, queryCallback);
                
                
            });
        }
        this.insertBook = function (data) {
            pool.getConnection(function (err, connection) {
                c = connection;
                var queryUpdateStr = squel.insert()
                    .into("books")
                    .set("name", data.name)
                    .set("author", data.author)
                    .set("pages", data.pages)
                    .set("type", data.type)                    
                    .toString();
                console.log(queryUpdateStr);
                connection.query(queryUpdateStr, queryCallback);


            });
        }

        function queryCallback(err, rows) {
            // And done with the connection.
            c.release();
            if (!err) {
                console.log('query ok!');
               
            } else {
                console.log('error  ' + err);
            }
        }
        
    }



}