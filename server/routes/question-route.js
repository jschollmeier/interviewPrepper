const router = require("express").Router()
const questions = require("../controllers/question-controller.js");


router.route("/questions")
    .get(blogController.findAll)
    .post(blogController.create);

router  
    .route("questions/:id")
    .get(blogController.findById)
    .put(blogController.update)
    .delete(blogController.remove);


module.exports = router;