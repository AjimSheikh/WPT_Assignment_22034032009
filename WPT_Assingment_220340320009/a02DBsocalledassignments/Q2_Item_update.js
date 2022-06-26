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

let itemno = 1;
let price = 650;

con.query('update item set price =? where itemno=?',
    [price, itemno],
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
+--------+----------+-------+------------+
| itemno | itemname | price | category   |
+--------+----------+-------+------------+
|      1 | book     |   400 | stationery  |
+--------+----------+-------+------------+

After Running :


mysql> select * from item;
+--------+----------+-------+------------+
| itemno | itemname | price | category   |
+--------+----------+-------+------------+
|      1 | book     |   650 | stationery  |
+--------+----------+-------+------------+
1 row in set (0.00 sec)
*/
