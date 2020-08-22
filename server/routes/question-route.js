const router = require("express").Router()
const questions = require("../controllers/question-controller.js");


router.route("/questions")
    .get(questions.findAll)
    .post(questions.create);

router  
    .route("questions/:id")
    .get(questions.findById)
    .put(questions.update)
    .delete(questions.remove);


module.exports = router;