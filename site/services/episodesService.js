const { Actor,Serie, Season, Episode, ActorEpisode } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Episode.findByPk(id, {
            include: ["actors","seasons"],
        });
    },
    findAll: async () => {
        return await Episode.findAll({
            include: ["actors","seasons"],
        });
    },
};
