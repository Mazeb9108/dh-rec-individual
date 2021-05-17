const express = require("express");
const router = express.Router();

const episodesController = require("../../controllers/api/episodes");

router.get("/", episodesController.index);
router.get("/:id", episodesController.detail);

module.exports = router;