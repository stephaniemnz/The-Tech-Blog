const sequelize = require('../config/connection');
const { User, Post, Comments } = require('../models'); 
// Post and Comments are not being used in this file
const postData = require('./postData.json');
const commentsData = require('./commentsData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  for (const comment of commentsData) {
    await Comments.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      post_id: Math.floor(Math.random() * postData.length) + 1,
    });
  }

  process.exit(0);
};

seedDatabase();
