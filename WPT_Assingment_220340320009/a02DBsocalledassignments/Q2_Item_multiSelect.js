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

let category = 'groceries';

con.query('select itemname, price from item where category=?',
    [category],
    (err, rows) => {
        if (err) {
            console.log("Error Came");
        }
        else {
            if (rows.length > 0) {
                for (let i = 0; i < rows.length; i++) {
                    console.log(rows[i].itemname + " " + rows[i].price);
                }
            }

        }
    });


/*

 Table in DB :
mysql> select * from item;
+--------+----------+-------+------------+
| itemno | itemname | price | category   |
+--------+----------+-------+------------+
|      1 | book     |   650 | stationery |
|      2 | pen      |    10 | stationery |
|      3 | oil      |   200 | groceries  |
|      4 | salt     |    25 | groceries  |
+--------+----------+-------+------------+

After Running :
Output in console:

oil 200
salt 25

*/
