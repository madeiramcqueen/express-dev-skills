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
    Skill.create(req.body.skill);
    console.log(req.body.skill);
    res.redirect("/skills");
}

function newSkill(req, res) {
    res.render('skills/new')
}

// function show(req, res) {
//     res.render('skills/show', {
//         skill: Skill.getOne(req.params.id),
//     });
// }
