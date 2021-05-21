const { Actor,Serie, Season, Episode, ActorEpisode } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Actor.findByPk(id, {
            include: ["episodes"]
        });
    },
    findAll: async () => {
        return await Actor.findAll({
            include: ["episodes"]
        });
    },
};
