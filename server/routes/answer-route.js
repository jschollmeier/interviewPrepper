const router = require("express").Router()
const answerController = require("../controllers/answer-controller.js");


router.route("/answers")
    .get(answerController.findAll)
    .post(answerController.create);

router  
    .route("/answers/:id")
    .get(answerController.findById)
    .put(answerController.update)
    .delete(answerController.remove);

module.exports = router;