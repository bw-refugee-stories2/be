const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("stories");
}

function findById(id) {
  return db("stories")
    .where({ id })
    .first();
}

function add(story) {
  return db("stories")
    .insert(story)
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function update(changes, id) {
  return db("stories")
    .where({ id })
    .update(changes, "*");
}

function remove(id) {
  return db("stories")
    .where({ id })
    .del();
}
