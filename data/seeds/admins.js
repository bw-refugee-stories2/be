exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("admins")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("admins").insert([
        {
          id: 1,
          username: "test123",
          email: "tester@email.com",
          password: "test"
        }
      ]);
    });
};
