const express = require("express");
const controller = require("./controllers/controller")
const userController = require("./controllers/userController")
const router = express.Router();

router
    .route("/api/restaurants")
    .get(controller.getRestaurants)
    .post(controller.createRestaurant)
    

router.route("/api/restaurants/:id")
    .get(controller.getOneRestaurant)
    .delete(controller.deleteRestaurant)
    .put(controller.updateRestaurant)
    
router.route("/api/user/register").post(userController.registerUser);
router.route("/api/user/login").post(userController.loginUser);
    
router
      .route("/api/user/:id")
     .delete(userController.deleteUser)
     .put(userController.updateUser);

router.route("/api/users/list").get(userController.listUsers);

module.exports = router;