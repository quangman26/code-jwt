import express from "express";
import homeController from '../controller/homeController';

const router = express.Router();
const handleHelloWorld = (req, res) => {
    return res.send("may ngu nhu heo");
}

const initWebRouter = (app) => {
    router.get("/", homeController.handleHelloWorld);
    router.get("/user", homeController.handleUserPage);
    router.post("/users/create-user", homeController.handleCreateNewUser);



    return app.use("/", router); // ứng dụng bắt đầu từ chữ gachj


}
export default initWebRouter;