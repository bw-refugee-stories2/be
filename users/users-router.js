const express = require("express");

const Admins = require("./users-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Admins.find()
    .then(admins => {
      res.json(admins);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get users" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Admins.findById(id)
    .then(admin => {
      if (admin) {
        res.json(admin);
      } else {
        res.status(404).json({ message: "Could not find user with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get users" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Admins.findById(id)
    .then(admin => {
      if (admin) {
        Admins.update(changes, id).then(updatedAdmin => {
          res.json(updatedAdmin);
        });
      } else {
        res.status(404).json({ message: "Could not find user with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update user" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Admins.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: "Could not find user with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete user" });
    });
});

module.exports = router;
