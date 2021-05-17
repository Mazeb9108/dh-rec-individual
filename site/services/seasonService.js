const { Movie, Genre, Actor, ActorMovie, Serie, Season, Episode, ActorEpisode } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Season.findByPk(id, {
            include: ["series"]
        });
    },
    findAll: async () => {
        return await Season.findAll({
            include: ["series"]
        });
    },
};