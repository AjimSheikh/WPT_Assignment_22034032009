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


let status = false;



con.query('update resource set status=?',
    [status],
    (err, res) => {
        if (err) {
            console.log("Error came");
        }
        else {
            console.log("Updated");
            console.log(res.affectedRows);
        }
    });

/*

 Before Running :
 select * from item;
select * from resource;
+------------+--------------+--------+
| resourceID | resourcename | status |
+------------+--------------+--------+
|          1 | AB112        |      1 |
+------------+--------------+--------+

After Running :


mysql> select * from resource;
+------------+--------------+--------+
| resourceID | resourcename | status |
+------------+--------------+--------+
|          1 | AB112        |      0 |
+------------+--------------+--------+
1 row in set (0.00 sec)
*/
