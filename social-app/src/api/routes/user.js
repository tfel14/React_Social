const controllers = require('../controllers/');
const express = require('express');
const router = express.Router();

router.get('/api/user', controllers.user.get); 

// router.post('api/user/register', controllers.user.post.register);

// router.post('api/user/login', controllers.user.post.login);

// router.post('api/user/logout', controllers.user.post.logout);

// router.put('/:id', controllers.user.put);

// router.delete('/:id', controllers.user.delete);

module.exports = router;