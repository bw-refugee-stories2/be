exports.up = function(knex) {
  return knex.schema.createTable("admins", admins => {
    admins.increments();

    admins
      .string("name", 255)
      .notNullable()
      .unique();
    admins.string("password", 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("admins");
};
