const express = require("express");
const router = express.Router();

const seasonsController = require("../controllers/seasons");

router.get("/", seasonsController.index);
router.patch("/:id", seasonsController.update);
router.get("/:id/edit", seasonsController.showEdit);
router.get("/create", seasonsController.showCreate);
router.post("/", seasonsController.create);
router.get("/:id", seasonsController.detail);


module.exports = router;