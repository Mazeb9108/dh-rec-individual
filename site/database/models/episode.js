"use strict";
module.exports = (sequelize, DataTypes) => {
    const Episode = sequelize.define(
        "Episode",
        {
            title: DataTypes.STRING,
            releaseDate: DataTypes.DATE,
            length: DataTypes.INTEGER(10).UNSIGNED,
            rating: DataTypes.STRING
        },
        { tableName: "episodes" }
    );
    Episode.associate = function (models) {

        Episode.belongsTo(models.Season, {
            as: "seasons",
            foreignKey: "seasonId"

        
        });

        Episode.belongsToMany(models.Actor, {
            as: "actors",
            through: "actorepisode",
            foreignKey: "episodeId",
            otherKey: "actorId",
            timestamp: false
        });
    };
    return Episode;
};