const db = require("../data/dbConfig");

module.exports = {
  insert,
  getAdmins,
  getBy
};

function insert(admin) {
  return db("admins").insert(admin, "id");
}

function getAdmins() {
  return db("admins");
}

function getBy(filter) {
  return db("admins").where(filter);
}
