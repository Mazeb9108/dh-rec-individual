"use strict";
module.exports = (sequelize, DataTypes) => {
    const Episode = sequelize.define(
        "Episode",
        {
            title: DataTypes.STRING,
            releaseDate: DataTypes.DATE,
            length: DataTypes.INTEGER(10).UNSIGNED,
            rating: DataTypes.DECIMAL(3,1)
        },
        { tableName: "episodes" }
    );
    Episode.associate = function (models) {
        Season.belongsTo(models.Serie, {
            as: "seasons",
            foreignKey: "seasonId"

        
        });

        Episode.belongsToMany(models.Actor, {
            as: "actors",
            through: "actorepisode",
            foreignKey: "episodeId",
           
        });
    };
    return Episode;
};