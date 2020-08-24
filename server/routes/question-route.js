const router = require("express").Router()
const questionController = require("../controllers/question-controller.js");


router.route("/questions")
    .get(questionController.findAll)
    .post(questionController.create);

router  
    .route("/questions/:id")
    .get(questionController.findById)
    .put(questionController.update)
    .delete(questionController.remove);


module.exports = router;