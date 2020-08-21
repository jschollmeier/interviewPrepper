const router = require("express").Router();
const commentsController = require("../controllers/commentsController");


//will match with "/api/blogs"
router.route("/")
    .post(commentsController.create)
    .get(commentsController.findAll)

//will match with "api/blogs/:id"
router  
    .route("/:id")
    .get(commentsController.findByBlogId)
    .delete(commentsController.deleteByBlogId)

module.exports = router;