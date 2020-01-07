const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  update,
  remove
};

function find() {
  return db("admins");
}

function findById(id) {
  return db("admins")
    .where({ id })
    .first();
}

async function update(changes, id) {
  return db("admins")
    .where({ id })
    .update(changes, "*");
}

function remove(id) {
  return db("admins")
    .where({ id })
    .del();
}
