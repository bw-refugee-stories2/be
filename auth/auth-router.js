const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admins = require("./auth-model");

router.post("/register", async (req, res) => {
  // implement registration
  let admin = req.body;
  const hash = bcrypt.hashSync(admin.password, 10);
  admin.password = hash;
  try {
    const newAdmin = await Admins.insert(admin);
    res.status(201).json(newAdmin);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", (req, res) => {
  // implement login
  let { name, password } = req.body;

  Admins.getBy({ name })
    .first()
    .then(admin => {
      if (admin && bcrypt.compareSync(password, admin.password)) {
        const token = signToken(admin);
        res.status(200).json({
          token: token,
          message: `Welcome ${admin.name}!`
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

function signToken(user) {
  const payload = {
    name: admin.name
  };
  const secret = process.env.JWT_SECRET || "it is a secret, is it safe?";
  const options = {
    expiresIn: "1h"
  };
  return jwt.sign(payload, secret, options);
}

module.exports = router;
