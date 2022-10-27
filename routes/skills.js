var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// Route paths
router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.newSkill);
router.post('/', skillsCtrl.create);

module.exports = router;
