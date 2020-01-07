const express = require("express");

const Stories = require("./stories-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Stories.find()
    .then(stories => {
      res.json(stories);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get stories" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Stories.findById(id)
    .then(story => {
      if (story) {
        res.json(story);
      } else {
        res
          .status(404)
          .json({ message: "Could not find story with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get stories" });
    });
});

router.post("/", (req, res) => {
  const storyData = req.body;

  Stories.add(storyData)
    .then(story => {
      res.status(201).json(story);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new story" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Stories.findById(id)
    .then(story => {
      if (story) {
        Stories.update(changes, id).then(updatedStory => {
          res.json(updatedStory);
        });
      } else {
        res.status(404).json({ message: "Could not find story with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update story" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Stories.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: "Could not find story with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete story" });
    });
});

module.exports = router;
