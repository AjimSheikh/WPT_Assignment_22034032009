let dbparams = {
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'pleaserun',
    port: 3306
};
const mysql = require('mysql2');
const con = mysql.createConnection(dbparams);

const express = require('express');
const app = express();

let resourceID = 3;

con.query('select resourcename,status from resource where resourceID=?',
    [resourceID],
    (err, rows) => {
        if (err) {
            console.log("Error Came");
        }
        else {
            if (rows.length > 0) {
                console.log(rows);
            }

        }
    });


/*

 Table in DB :
mysql> select * from resource;
+------------+--------------+--------+
| resourceID | resourcename | status |
+------------+--------------+--------+
|          1 | AB112        |      0 |
|          2 | BC534        |      0 |
|          3 | HG824        |      1 |
|          4 | YL564        |      1 |
+------------+--------------+--------+
4 rows in set (0.00 sec)

After Running :
Output in console:
[ { resourcename: 'HG824', status: 1 } ]
*/
