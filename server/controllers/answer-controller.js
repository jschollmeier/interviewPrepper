const Answer = require("../database/models/answer-model.js");

// create new
exports.create = (req, res) => {

    if(!req.body.content) {
        return res.status(400).send({
            message: "Content can't be empty, please fill in with an answer"
        });
    }


    const answer = new Answer({
        title: req.body.title || "This Answer has no title, which question does it belong to",
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

// find all
exports.findAll = (req, res) => {
    Answer.find()
    .then(answers => {
        res.send(answers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error has occurred while trying to find the answers."
        });
    });
};

// find by objectId
exports.findOne = (req, res) => {
    Answer.findById(req.params.answerId)
    .then(answer => {
        if(!answer) {
            return res.status(404).send({
                message: "Cannot find Answer with this id " + req.params.answerId
            });            
        }
        res.send(answer);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Cannot find Answer with this id " + req.params.answerId
            });                
        }
        return res.status(500).send({
            message: "Error can't retrive answer this with id " + req.params.answerId
        });
    });
};







