const { Movie, Genre, Actor, ActorMovie, Serie, Season, Episode, ActorEpisode } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Actor.findByPk(id, {
            include: ["movies", "episodes"],
        });
    },
    findAll: async () => {
        return await Actor.findAll({
            include: ["movies", "episodes"],
        });
    },
};
