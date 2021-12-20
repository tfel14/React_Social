const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.feedPost.get.allPosts);

router.post('/share', controllers.feedPost.post.makeNewPost);

// router.post('/login', controllers.user.post.login);

// router.post('/logout', controllers.user.post.logout);

router.get('/:id', controllers.feedPost.get.onePost);

router.post('/like/:id', controllers.feedPost.post.like);

// router.delete('/:id', controllers.user.delete);

module.exports = router;