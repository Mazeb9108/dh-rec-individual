const { Movie, Genre, Actor, ActorMovie, Serie, Season, Episode, ActorEpisode } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Movie.findByPk(id, {
            include: ["actors", "genres"],
        });
    },
    findAll: async () => {
        return await Movie.findAll({
            include: ["actors", "genres"],
        });
    },
};
