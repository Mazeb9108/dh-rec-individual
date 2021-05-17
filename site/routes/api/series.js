const express = require("express");
const router = express.Router();

const seriesController = require("../../controllers/api/series");

router.get("/", seriesController.index);
router.get("/:id", seriesController.detail);

module.exports = router;