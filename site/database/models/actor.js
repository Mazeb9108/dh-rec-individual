"use strict";
module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define(
        "Actor",
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            profilePic: DataTypes.STRING,
        },
        { tableName: "actors" }
    );
    Actor.associate = function (models) {
        Actor.belongsToMany(models.Episode, {
            as: "episodes",
            through: models.ActorEpisode,
            foreignKey: "actorId",
        });
    };
    return Actor;
};
