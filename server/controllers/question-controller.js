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















// // create a new
// exports.create = (req, res) => {
   
//     if(!req.body.content) {
//         return res.status(400).send({
//             message: "Content can't be empty, please fill it in"
//         });
//     }

    
//     const question = new Question({
//         title: req.body.title || "The Question has not title", 
//         content: req.body.content
//     });

   
//     question.save()
//     .then(data => {
//         res.send(data);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while creating the Question."
//         });
//     });
// };

// // find all
// exports.findAll = (req, res) => {
//     Question.find()
//     .then(questions => {
//         res.send(questions);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "error has occurred while retrieving questions."
//         });
//     });
// };

// // find by id
// exports.delete = (req, res) => {
//     Question.findOneAndDelete(req.params.question)
//     .then(question => {
//         if(!question) {
//             return res.status(404).send({
//                 message: "Cannot find Question with this id " + req.params.question
//             });            
//         }
//         res.send(question);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "Cannot find Question with this id " + req.params.question
//             });                
//         }
//         return res.status(500).send({
//             message: "Error can't retrive Question this with id " + req.params.question
//         });
//     });
// };

    


