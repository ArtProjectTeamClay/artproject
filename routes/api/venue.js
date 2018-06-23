const router = require("express").Router();
const venueController = require("../../controllers/venueController");

// Matches with "/api/books"
router
  .route("/")
  .get(venueController.findAll)
  .post(venueController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(venueController.findById)
  .put(venueController.update)
  .delete(venueController.remove);

module.exports = router;
