import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRouter from "./routes/web";
require("dotenv").config();
import bodyParser from 'body-parser'

const app = express();
const HOST = 'localhost';
const PORT = process.env.PORT || 3000;


configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initWebRouter(app);

app.listen(3000, () => {
    console.log(">>> abc");
})