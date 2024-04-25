const router = require("express").Router();
const { Comments } = require("../../models");

//Create a new comment
router.post("/", async (req, res) => {
  try {
    const commentData = await Comments.create({
      user_id: req.session.user_id,
      body: req.body.body,
      created_at: new Date(),
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
