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
    Serie.associate = function (models) {
        Serie.belongsToMany(models.Actor, {
            as: "actors",
            through: models.ActorEpisode,
            foreignKey: "episodeId",
        });
    };
    return Episode;
};