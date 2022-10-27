// routes/skills.js
const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    create,
    new: newSkill,
    delete: deleteSkill
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req, res) {
    res.render("skills/show", { s: Skill.getOne(req.params.id) });
}

function create(req, res) {
    Skill.create(req.body);
    console.log(req.body);
    res.redirect("/skills");
}

function newSkill(req, res) {
    res.render('skills/new')
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id)
    res.redirect('/skills')
}


// function show(req, res) {
//     res.render('skills/show', {
//         skill: Skill.getOne(req.params.id),
//     });
// }
