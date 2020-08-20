const Question = require('../models/question-model.js');


exports.create = (req, res) => {
   
    if(!req.body.content) {
        return res.status(400).send({
            message: "content can not be empty, please fill it in"
        });
    }

    
    const question = new Question({
        title: req.body.title || "The Question has not title", 
        content: req.body.content
    });

   
    question.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Question."
        });
    });
};


exports.findAll = (req, res) => {
    Question.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error has occurred while retrieving questions."
        });
    });
};


    


