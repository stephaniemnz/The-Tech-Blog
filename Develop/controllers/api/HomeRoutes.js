const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//Login route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

// Get all posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("all-posts", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.redirect("login");
  }
});

// Get single post
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Comment,
          attributes: ["body"],
          include: {
            model: User,
            attributes: ["name"],
          },
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render("single-post", { post });
  } catch (err) {
    res.redirect("login");
  }
});

//Export router

module.exports = router;
