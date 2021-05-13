"use strict";
module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define(
        "Actor",
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            profilePic: DataTypes.STRING,
            actorAwards: DataTypes.STRING,
        },
        { tableName: "actors" }
    );
        Actor.associate = function (models) {
    Actor.belongsToMany(models.Episode, {
            as: "episodes",
            through: "actorEpisode",
            foreignKey: "actorId",
            otherKey: "episodeId",
            timestamp: false
        });
          Actor.associate = function (models) {
        Actor.belongsToMany(models.Movie, {
            as: "movies",
            through: "actorMovie",
            foreignKey: "actorId",
            otherKey: "movieId",
            timestamp: false
        });
        Actor.belongsToMany(models.Serie, {
            as: "episodes",
            through: "actorserie",
            foreignKey: "actorId",
            otherKey: "serieId",
            timestamp: false
        });
    };
    };
    return Actor;
};
