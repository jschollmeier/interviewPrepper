module.exports = (app) => {
    const questions = require("../controllers/question-controller.js");

    // Create a new Note
    app.post("/questions", questions.create);

    // Retrieve all Notes
    app.get("/questions", questions.findAll);

} 