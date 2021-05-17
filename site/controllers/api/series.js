const seriesService = require("../../services/seriesService");

module.exports = {
    index: async (req, res, next) => {
        const series = await seriesService.findAll();
        res.send({count: series.length, series:series});
    },

    detail: async (req, res) => {
        const serie = await seriesService.findOne(req.params.id);
        res.send(serie);
    },
}