import mysql from "mysql2/promise";


// Steps to connect to the mysql to the expresss
// 1. connect the mysql 
// 2. create a DB
// 3. create a table
// 4. perform CRUD operation


// 1. connect the mysql
const mysql_db = await mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Ankit$6969",
    database : "sqlInjectionInExpress",
});
console.log("mysql connected successfully");


// 2. create a DB
// await mysql_db.execute("create database sqlInjectionInExpress");
// console.log(await mysql_db.execute("show databases"));


// 3. create a table
// await mysql_db.execute(`
//     CREATE TABLE usersInject(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         userName VARCHAR(100) NOT NULL,
//         email VARCHAR(100) NOT NULL UNIQUE
//     );
// `);



// 4. perform CRUD operation

// CREATE
// insert this is inline statement which is not recommended
// await mysql_db.execute(`
//     insert into usersInject(userName, email) values
//         ("Ankit","ankit330660@gmail.com");  
// `)

//insert this is prepared statement which is recommended
// await mysql_db.execute(`
//     insert into usersInject(userName, email) values(?,?)`,
//     ["Abhi","abhi@gmail.com"]
// );

// inserting multiple values in the table
// const values = [
//     ["Alice","alice@gmail.com"],
//     ["Bob","bob@gmail.com"],
//     ["Jhon","jhon@gmail.com"],
//     ["Doe","doe@gmail.com"],
//     ["Batman","batman@gmail.com"],
// ]
// await mysql_db.query("insert into usersInject(userName, email) values ? ",[values]);


// READ
const [rows] = await mysql_db.execute(`select * from usersInject`);
// const [rows] = await mysql_db.execute(`select * from usersInject where userName="Batman"`);
console.log(rows);
// note:- if we donot use the [row] and use only row 
//        then the metadata of the table also shown


// UPDATE
// Syntax:-
// update table_name set col1=val1, col2=val2 where condition

// await mysql_db.execute(`update usersInject set userName="Bobby" where userName="Bob"`);

// try {
//     const [rows] = await mysql_db.execute(
//         `update usersInject set userName="Ram" where email="jhon@gmail.com"`
//     );
//     console.log("All users: ",rows );
    
// } catch (error) {
//     console.log(error);
    
// }

// This is another appraoch to update the table using prepared statement
// try {
//     const [rows] = await mysql_db.execute(
//         `update usersInject set userName=? where email=?`,["Abhis","abhi@gmail.com"]
//     );
//     console.log("All users: ",rows );
    
// } catch (error) {
//     console.log(error);
    
// }



// DELETE
// Syntax:-
// delete from table_name where condition

// await mysql_db.execute(`delete from usersInject where userName="Alice"`);

// try {
//     const [rows] = await mysql_db.execute(`delete from usersInject where email="doe@gmail.com"`);
//     console.log("All users : ",rows);
    
// } catch (error) {
//     console.log(error);
    
// }

// try {
//     const [rows] = await mysql_db.execute(`delete from usersInject where email=?`,["bob@gmail.com"]);
//     console.log("All users : ",rows);
    
// } catch (error) {
//     console.log(error);
    
// }
