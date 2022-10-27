// list of skills
const skills = ['JavaScript', 'HTML', 'CSS', 'Express']

function getAll() {
    return skills
}

function create(skill) {
    skills.push(skill);
}

module.exports = {
    getAll,
    create
}