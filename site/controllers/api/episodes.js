const episodesService = require("../../services/episodesService");

module.exports = {
    index: async (req, res) => {
        const episodes = await episodesService.findAll();
        res.send({ count: episodes.length, episodes: episodes });
    },

    detail: async (req, res) => {
        const episodes = await episodesService.findOne(req.params.id);
        res.send(episode);
    },

};
