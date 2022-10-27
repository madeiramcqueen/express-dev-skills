// routes/skills.js
const Skill = require('../models/skill')


module.exports = {
    index,
    create,
    newSkill
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function create(req, res) {
    res.send('skills/create') 
}

function newSkill(req, res) {
    res.send('skills/new')
}

// function show(req, res) {
//     res.render('skills/show', {
//         skill: Skill.getOne(req.params.id),
//     });
// }
