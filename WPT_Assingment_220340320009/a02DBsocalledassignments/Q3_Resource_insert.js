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


let resourceID = 1;
let resourcename = 'AB112';
let status = true;



con.query('insert into resource (resourceID,resourcename,status) values (?,?,?)',
    [resourceID, resourcename, status],
    (err, res) => {
        if (err) {
            console.log("Error came");
        }
        else {
            console.log("Inserted");
            console.log(res.affectedRows);
        }
    });


/*

 After Running :

 select * from resource;
+------------+--------------+--------+
| resourceID | resourcename | status |
+------------+--------------+--------+
|          1 | AB112        |      1 |
+------------+--------------+--------+
1 row in set (0.00 sec)
*/
