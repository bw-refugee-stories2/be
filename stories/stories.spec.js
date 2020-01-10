const request = require("supertest");
const storyRouter = require("./stories-router");
const db = require("../data/dbConfig");

describe("storyRouter", function() {
  beforeEach(async () => {
    await db("stories").del();
  });

  describe("environment", function() {
    it("should set environment to testing", function() {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe("GET /", function() {
    it("should return a 200 OK", function() {
      request(storyRouter)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("should return a JSON", function() {
      request(storyRouter)
        .get("/")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });

  describe("POST /", function() {
    it("should return a 201 CREATED", function() {
      request(storyRouter)
        .post("/")
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
    it("should return a JSON", async function() {
      request(storyRouter)
        .post("/")
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
});

describe("PUT /:id", function() {
  const name = "test123";
  const content = "this is a test";

  it("should edit a story", async function() {
    request(storyRouter)
      .post("/login")
      .send({ username: "test123", password: "test" })
      .then(res => {
        const token = res.body.token;

        request(storyRouter)
          .put({ name, content })
          .set("Authorization", token)
          .then(res => {
            expect(res.status).toBe(200);
            expect(Array.isArray(res.body)).toBe(true);
          });
      });
  });
});

describe("DELETE /:id", function() {
  const name = "test123";
  const content = "this is a test";

  it("should delete a story", async function() {
    request(storyRouter)
      .post("/login")
      .send({ username: "test123", password: "test" })
      .then(res => {
        const token = res.body.token;

        request(storyRouter)
          .delete("/api/stories/1")
          .set("Authorization", token)
          .then(res => {
            expect(res.body.removed).toBe("deleted");
          });
      });
  });
});
