import bcrypt from 'bcryptjs';
import mysql from 'mysql2';
const salt = bcrypt.genSaltSync(10);

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt'
});


const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt); //ăm code người dùng nhập vào
    return hashPassword;
}

const createNewUser = (email, password, username) => {
    let hashPass = hashUserPassword(password);
    //   simple query
    connection.query(
        'INSERT INTO users (email, password, username) VALUES(?, ?, ?)', [email, hashPass, username],
        function (err, results, fields) {
            if (err) {
                console.log(err)
            }
        }
    );
}

const getUserList = () => {
    let users = [];
    return connection.query(
        'Select * from users',
        function (err, results, fields) {
            if (err) {
                console.log(err)
                return users;
            }

            users = results;
            console.log("run get return :", users)
            return users;
        }
    );
}
module.exports = {
    createNewUser, getUserList
}