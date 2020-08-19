const db = require("../models");

module.exports = {
    findById: function(req, res) {
        if (!req.user){
            //if user is not logged in send back an empty object
            res.json({})
        } else{
            db.User.findById(req.user.id)
                .then(dbUser => res.json(dbUser))
                .catch(err => res.status(422).json(err));
        }
    },
    findByEmail: function(req, res) {
        db.User.findOne({email : req.params.email})
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.User.create(req.body)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    }
    
};