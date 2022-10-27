// list of skills
const skills = [
    { id: 123456, skill: 'JavaScript' },
    { id: 124567, skill: 'HTML' },
    { id: 125678, skill: 'CSS' }
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return skills
}

function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(
        skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

