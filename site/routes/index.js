const express = require("express");
const router = express.Router();


const actorsRouter = require("./actors");
const seriesRouter = require("./series");
const seasonsRouter = require("./seasons");
const episodesRouter = require("./episodes");

const apiRouter = require("./api");


router.use("/actors", actorsRouter);
router.use("/series", seriesRouter);
router.use("/seasons", seasonsRouter);
router.use("/episodes", episodesRouter);


// localhost:3000/api
router.use("/api", apiRouter);

router.get("/", async function (req, res) {
    res.render("index");
});

module.exports = router;
