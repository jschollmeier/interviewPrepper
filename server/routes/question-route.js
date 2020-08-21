const router = require("express").Router()
const questions = require("../controllers/question-controller.js");


router.post("/questions", questions.create);

router.get("/questions", questions.findAll);

router.get('/questions/:questionId', questions.findOne);

router.delete('/questions/:questionId', questions.delete);

module.exports = router;