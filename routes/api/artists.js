const router = require("express").Router();
const artistController = require("../../controllers/artistController");
const venueController = require("../../controllers/venueController");

// Matches with "/api/books
router
  .route("/")
  .get(artistController.findAll)
  .post(artistController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(artistController.findById)
  .put(artistController.update)
  .delete(artistController.remove);

module.exports = router;
