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

async function add(story) {
  return db("stories")
    .insert(story)
    .returning("id");
}

// function add(story) {
//   return db("stories")
//     .insert(story)
//     .then(ids => {
//       const [id] = ids;
//       return findById(id);
//     });
// }

async function update(changes, id) {
  return db("stories")
    .where({ id })
    .update(changes, "*");
}

function remove(id) {
  return db("stories")
    .where({ id })
    .del();
}
