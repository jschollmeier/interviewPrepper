const q = require('../database/models/question-model.js');




module.exports = {
    create: function(req, res){
        q.Question.create(req.body)
        .then(qQuestion => res.json(qQuestion))
        .catch(err => res.status(404).json(err));
    },

    findAll: function(req, res){
        q.Question.find(req.query)
        .then(qQuestion => res.json(qQuestion))
        .catch(err => res.status(404).json(err));
    },

    findById: function(req, res) {
        q.Question.findById(req.params.id)
            .then(dbQuestion => res.json(qQuestion))
            .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        q.Question.findOneAndUpdate({ id: req.params.id}, req.body)
            .then(qQuestion => res.json(qQuestion))
            .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        q.Question.findById(req.params.id)
            .then(qQuestion => qQuestion.remove())
            .then(qQuestion => res.json(qQuestion))
            .catch(err => res.status(422).json(err));

    }
}

















