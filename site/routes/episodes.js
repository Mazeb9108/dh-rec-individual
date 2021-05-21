const express = require("express");
const router = express.Router();

const episodesController = require("../controllers/episodes");

router.get("/", episodesController.index);
router.patch("/:id", episodesController.update);
router.get("/:id/edit", episodesController.showEdit);
router.get("/create", episodesController.showCreate);
router.post("/", episodesController.create);
router.get("/:id", episodesController.detail);

router.post("/:id/actor", episodesController.addActor);
router.patch("/:id/actor/:actorId", episodesController.updateActor);
router.delete("/:id/actor/:actorId", episodesController.removeActor);


module.exports = router;