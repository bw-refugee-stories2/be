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
          password:
            "$2a$10$gj3grxdnu7CDtNyY69MtVe5xcv.4xK0NlC.6beVPmu1dioSKIE84y"
        }
      ]);
    });
};
