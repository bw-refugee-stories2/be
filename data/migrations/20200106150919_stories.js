exports.up = function(knex) {
  return knex.schema.createTable("stories", stories => {
    stories.increments();
    stories
      .string("name", 255)
      .notNullable()
      .unique();
    stories.string("image_URL").notNullable();
    stories.text("quote");
    stories.text("content").notNullable();
    stories.string("author");
    stories.boolean("approved").defaultTo(false);
  });
};

exports.down = function(knex) {};
