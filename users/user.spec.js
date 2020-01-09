const request = require("supertest");
const usersRouter = require("./users-router");
const db = require("../data/dbConfig");

describe("usersRouter", function() {
  describe("environment", function() {
    it("should set environment to testing", function() {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe("GET /", function() {
    const username = "test123";
    const password =
      "$2a$10$gj3grxdnu7CDtNyY69MtVe5xcv.4xK0NlC.6beVPmu1dioSKIE84y";

    it("should get users", function() {
      request(usersRouter)
        .post("/login")
        .send({ username, password })
        .then(res => {
          const token = res.body.token;

          request(usersRouter)
            .get("/api/users")
            .set("Authorization", token)
            .then(res => {
              expect(res.status).toBe(200);
              expect(Array.isArray(res.body)).toBe(true);
            });
        });
    });
  });

  describe("PUT /:id", function() {
    const username = "test123";
    const password =
      "$2a$10$gj3grxdnu7CDtNyY69MtVe5xcv.4xK0NlC.6beVPmu1dioSKIE84y";
    const newUsername = "test12345";

    it("should edit a user", function() {
      request(usersRouter)
        .post("/login")
        .send({ username, password })
        .then(res => {
          const token = res.body.token;

          request(usersRouter)
            .put({ newUsername })
            .set("Authorization", token)
            .then(res => {
              expect(res.status).toBe(200);
            });
        });
    });
  });

  describe("DELETE /:id", function() {
    const username = "test123";
    const password =
      "$2a$10$gj3grxdnu7CDtNyY69MtVe5xcv.4xK0NlC.6beVPmu1dioSKIE84y";

    it("should delete a user", function() {
      request(usersRouter)
        .post("/login")
        .send({ username, password })
        .then(res => {
          const token = res.body.token;

          request(usersRouter)
            .delete("/api/users/1")
            .set("Authorization", token)
            .then(res => {
              expect(res.body.removed).toBe("deleted");
            });
        });
    });
  });
});
