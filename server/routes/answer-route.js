const router = require("express").Router()
const answerController = require("../controllers/answer-controller.js");


router.route("/questions")
    .get(answerController.findAll)
    .post(answerController.create);

router  
    .route("questions/:id")
    .get(answerController.findById)
    .put(answerController.update)
    .delete(answerController.remove);

module.exports = router;