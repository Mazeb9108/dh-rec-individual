const express = require("express");
const router = express.Router();

const actorsRouter = require("./api/actors");
const seriesRouter = require("./api/series");
const seasonsRouter = require("./api/seasons");
const episodesRouter = require("./api/episodes");

// /api/actors
router.use("/actors", actorsRouter);

// /api/series
router.use("/series", seriesRouter);

// /api/seasons
router.use("/seasons", seasonsRouter);

// /api/episodes
router.use("/episodes", episodesRouter);



module.exports = router;
