const q = require('../database/models/');

module.exports = {
    create: function(req, res){
        q.Answer.create(req.body)
        .then(q => res.json(q))
        .catch(err => res.status(404).json(err));
    },

    findAll: function(req, res){
        q.Answer.find(req.query)
        .then(q => res.json(q))
        .catch(err => res.status(404).json(err));
    },

    findById: function(req, res) {
        q.Answer.findById(req.params.id)
            .then(q => res.json(q))
            .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        q.Answer.findOneAndUpdate({ id: req.params.id}, req.body)
            .then(q => res.json(q))
            .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        q.Answer.findById(req.params.id)
            .then(q => q.remove())
            .then(q => res.json(q))
            .catch(err => res.status(422).json(err));

    }
}







