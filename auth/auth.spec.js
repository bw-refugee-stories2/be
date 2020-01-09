const request = require("supertest");
const authRouter = require("./auth-router");
const db = require("../data/dbConfig");

describe("POST /register", function() {
  it("should return a 201 CREATED", function() {
    request(authRouter)
      .post("/")
      .then(res => {
        expect(res.status).toBe(201);
      });
  });
  it("should return a JSON", function() {
    request(authRouter)
      .post("/")
      .then(res => {
        expect(res.type).toMatch(/json/i);
      });
  });
});

describe("POST /login", function() {
  it("should return a 201 CREATED", function() {
    request(authRouter)
      .post("/")
      .then(res => {
        expect(res.status).toBe(201);
      });
  });
  it("should return a JSON", function() {
    request(authRouter)
      .post("/")
      .then(res => {
        expect(res.type).toMatch(/json/i);
      });
  });
});
