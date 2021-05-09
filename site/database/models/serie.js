"use strict";
module.exports = (sequelize, DataTypes) => {
    const Serie = sequelize.define(
        "Serie",
        {
            title: DataTypes.STRING,
            releaseDate: DataTypes.DATE,
            revenue: DataTypes.STRING,
            serieAwards: DataTypes.INTEGER(11).UNSIGNED,
            coverArt: DataTypes.STRING,
            length: DataTypes.INTEGER(10).UNSIGNED,

        },
        { tableName: "series" }
    );
    Serie.associate = function (models) {
        Serie.belongsTo(models.Genre, {
            as: "genres",
        });
        Serie.belongsToMany(models.Actor, {
            as: "actors",
            through: models.ActorEpisode,
            foreignKey: "episodeId",
        });
    };
    return Serie;
};