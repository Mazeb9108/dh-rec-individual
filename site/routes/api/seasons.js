const express = require("express");
const router = express.Router();

const seasonsController = require("../../controllers/api/seasons");

router.get("/", seasonsController.index);
router.get("/:id", seasonsController.detail);

module.exports = router;