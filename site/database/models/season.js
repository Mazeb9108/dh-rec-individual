"use strict";
module.exports = (sequelize, DataTypes) => {
    const Season = sequelize.define(
        "Season",
        {
            title: DataTypes.STRING,
            rating: DataTypes.DECIMAL(3,1),
        },
        { tableName: "seasons" }
    );

        Season.associate = function (models) {
            Season.hasMany(models.Episode, { as: "episodes" });

            Season.belongsTo(models.Serie, {
            as: "series",
            foreignKey: "serieId"

        
        });

};
    return Season;
};