const router = require("express").Router();
const blogController = require("../../controllers/blogController");


//will match with "/api/blogs"
router.route("/")
    .get(blogController.findAll)
    .post(blogController.create);

//will match with "api/blogs/:id"
router  
    .route("/:id")
    .get(blogController.findById)
    .put(blogController.update)
    .delete(blogController.remove);

module.exports = router;