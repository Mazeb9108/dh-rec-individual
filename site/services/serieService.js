const { Movie, Genre, Actor, ActorMovie, Serie, Season, Episode, ActorEpisode } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Serie.findByPk(id, {
            include: ["genres"]
        });
    },
    findAll: async () => {
        return await Serie.findAll({
            include: ["genres"]
        });
    },
};