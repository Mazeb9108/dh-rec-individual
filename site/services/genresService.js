const { Movie, Genre, Actor, ActorMovie, Serie, Season, Episode, ActorEpisode } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Genre.findByPk(id, {
            include: ["movies","series"],
        });
    },
    findAll: async () => {
        return await Genre.findAll({
            include: ["movies","series"],
        });
    },
};
