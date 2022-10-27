var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require('../controllers/skills');

// Route paths
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.get('/:id', skillsCtrl.show);

module.exports = router;
