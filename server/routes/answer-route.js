const router = require("express").Router()
const answers = require("../controllers/answer-controller.js");

router.post("/answers", answers.create);

router.get("/answers", answers.findAll);

router.get('/answers/:answerId', answers.findOne);


module.exports = router;