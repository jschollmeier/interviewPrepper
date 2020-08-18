const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//Api Routes
router.use("/api", apiRoutes)

//if no Api routes are hit, send to react 
router.use((req, res) => 
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;