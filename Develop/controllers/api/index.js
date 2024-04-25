const router = require("express").Router();
const userRoutes = require("./userRoutes");
const commentsRoutes = require("./commentsRoutes");
const postRoutes = require("./postRoutes");
const homeRoutes = require("./HomeRoutes");

router.use("/users", userRoutes);
router.use("/comments", commentsRoutes);
router.use("/posts", postRoutes);
router.use("/", homeRoutes);

module.exports = router;
