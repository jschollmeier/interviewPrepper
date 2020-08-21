const Answer = require("../models/answer-model.js");

exports.create = (req, res) => {

    if(!req.body.content) {
        return res.status(400).send({
            message: "Content can't be empty, please fill in"
        });
    }


    const answer = new Answer({
        title: req.body.title || "The Answer has no title",
        content: req.body.content
    });

    answer.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Answer."
        });
    });
}

exports.findAll = (req, res) => {
    Answer.find()
    .then(answers => {
        res.send(answers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error has occurred while retrieving questions."
        });
    });
};







