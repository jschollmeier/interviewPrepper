const router = require("express").Router();
const userController = require("../../controllers/userController");
var passport = require("../config/passport");

//will match with "api/users/login"
// router.route("/login")
//     .post(passport.authenticate("local"), function(req, res) {
//         res.json(req.user);
//     })

    
//will match with "api/users/signup"
router.route("/signup")
    .post(userController.create); 

//will match with "api/users/logout"
router.route("/logout")
    .get(function(req, res) {
        req.logout()
        res.redirect("/");
    }); 

router.route("user_data")
    .get(userController.findById)

router.route("/:email")
    .get(userController.findByEmail)

module.exports = router;



