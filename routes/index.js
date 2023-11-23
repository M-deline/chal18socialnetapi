const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

// Add this line to define a GET route for the root ("/")
router.get('/', function(req, res) {
  res.send('Hello World!');
});

router.use((req, res) => {
  res.status(404).send("<p>404 Error<p>");
  console.log("404");
});

module.exports = router;