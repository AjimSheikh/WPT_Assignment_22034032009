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
let itemname = 'book';
let price = 400;
let category = 'stationery';



con.query('insert into item (itemno,itemname,price,category) values (?,?,?,?)',
    [itemno, itemname, price, category],
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
 create table item (itemno integer primary key, itemname varchar(15), price integer, category varchar(15));

 After Running :
 select * from item;
+--------+----------+-------+------------+
| itemno | itemname | price | category   |
+--------+----------+-------+------------+
|      1 | book     |   400 | stationery |
+--------+----------+-------+------------+
*/
