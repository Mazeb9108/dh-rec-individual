const express = require("express");
const router = express.Router();

const seriesController = require("../controllers/series");

router.get("/", seriesController.index);
router.patch("/:id", seriesController.update);
router.get("/:id/edit", seriesController.showEdit);
router.get("/create", seriesController.showCreate);
router.post("/", seriesController.create);
router.get("/:id", seriesController.detail);

module.exports = router;