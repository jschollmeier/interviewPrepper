const db = require("../database/models");

module.exports = {
    findByBlogId: function(req, res) {
        db.Comments.find({
            blogId: req.params.id
        })
        .then(dbComments => res.json(dbComments))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Comments.create(req.body)
            .then(dbComments => res.json(dbComments))
            .catch(err => res.status(422).json(err));
    }
    
};