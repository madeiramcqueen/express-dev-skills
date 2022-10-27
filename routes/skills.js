var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// Route paths
router.get('/', skillsCtrl.index);
router.post('/', skillsCtrl.create);
router.get('/new', skillsCtrl.newSkill);

module.exports = router;
