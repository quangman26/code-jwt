import { use } from 'express/lib/application';

import userService from '../service/userService';

const { name } = require("ejs");


const handleHelloWorld = (req, res) => {
    //const name = "Man";
    return res.render("home.ejs",);
}

const handleUserPage = (req, res) => {
    let userList = userService.getUserList();
    console.log(">>> check user list : ", userList)
    //model => get data from database

    return res.render("user.ejs");
}
const handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    // userService.createNewUser(email, password, username)
    let userList = userService.getUserList();

    console.log(">>>check :", userList)
    return res.send("handleCreateNewUser");
}


module.exports = {
    handleHelloWorld, handleUserPage, handleCreateNewUser
}
