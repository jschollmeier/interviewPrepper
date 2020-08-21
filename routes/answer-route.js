model.exports = (app) => {
    const answers = require("../models/question-model");

    app.post("/answers", answers.create);

    app.get("/answers", answers.findAll);
 
}