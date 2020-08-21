const Question = require('../database/models/question-model.js');

// create a new
exports.create = (req, res) => {
   
    if(!req.body.content) {
        return res.status(400).send({
            message: "Content can't be empty, please fill it in"
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

// find all
exports.findAll = (req, res) => {
    Question.find()
    .then(questions => {
        res.send(questions);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error has occurred while retrieving questions."
        });
    });
};

// find by id
exports.findOne = (req, res) => {
    Question.findById(req.params.questionId)
    .then(question => {
        if(!question) {
            return res.status(404).send({
                message: "Cannot find Question with this id " + req.params.questionId
            });            
        }
        res.send(question);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Cannot find Question with this id " + req.params.questionId
            });                
        }
        return res.status(500).send({
            message: "Error can't retrive Question this with id " + req.params.questionId
        });
    });
};

    


