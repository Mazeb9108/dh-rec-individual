const seasonsService = require("../../services/seasonsService");

module.exports = {
    index: async (req, res, next) => {
        const seasons = await seasonsService.findAll();
        res.send({count: seasons.length, seasons:seasons});
    },

    detail: async (req, res) => {
        const seasons = await seasonsService.findOne(req.params.id);
        res.send(season);
    },
}