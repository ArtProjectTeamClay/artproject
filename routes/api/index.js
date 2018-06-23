const router = require("express").Router();
const artistRoutes = require("./artists");
const venueRoutes = require("./venue");
const imageRoutes = require("./image");

// Book routes
router.use("/artists", artistRoutes);
router.use("/venue", venueRoutes);
router.use("/images", imageRoutes);

module.exports = router;
