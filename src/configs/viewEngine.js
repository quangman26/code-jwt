import express from "express";

const configViewEngine = (app) => {
    // Cấu hình view engine tại đây
    app.use(express.static('./src/public'));
    app.set("view engine", "ejs");//su dung ejs de viet code html 
    app.set("views", "./src/views");
    // ...
}

export default configViewEngine;
