const db = require("../models");

module.exports = { 
    findAll: function(req, res) {
        db.Blog.find(req.query)
            .then(dbBlog => res.json(dbBlog))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Blog.findById(req.params.id)
            .then(dbBlog => res.json(dbBlog))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Blog.create(req.body)
            .then(dbBlog => res.json(dbBlog))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Blog.findOneAndUpdate({ id: req.params.id}, req.body)
            .then(dbBlog => res.json(dbBlog))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Blog.findById(req.params.id)
            .then(dbBlog => dbBlog.remove())
            .then(dbBlog => res.json(dbBlog))
            .catch(err => res.status(422).json(err));
    }

};