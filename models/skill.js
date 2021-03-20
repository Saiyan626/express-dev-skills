const skills = [
  { id: 498537, skill: 'HTML', done: true },
  { id: 846594, skill: 'CSS', done: true },
  { id: 643347, skill: 'JavaScript', done: true },
  { id: 487487, skill: 'NodeJS', done: false },
  { id: 389222, skill: 'ExpressNodeJS', done: false }
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, skill) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skill.id = id;
  skills.splice(idx, 1, skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}