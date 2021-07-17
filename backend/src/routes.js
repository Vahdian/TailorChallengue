const express = require("express");
const controller = require("./controllers/controller")
const router = express.Router();

router
    .route("/api/restaurants")
    .get(controller.getRestaurants)
    .post(controller.createRestaurant)
    

router.route("/api/restaurants/:id")
    .get(controller.getOneRestaurant)
    .delete(controller.deleteRestaurant)
    .put(controller.updateRestaurant)
    
//router.route("/user/register").post(controller.userController.registerUser);
//router.route("/user/login").post(controller.userController.loginUser);
    
//router
//      .route("/user/:id")
//      .delete(controller.userController.deleteUser)
//      .put(controller.userController.updateUser);

//router.route("/users/list").get(controller.userController.listUsers);

module.exports = router;