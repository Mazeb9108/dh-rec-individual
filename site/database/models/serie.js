"use strict";
module.exports = (sequelize, DataTypes) => {
    const Serie = sequelize.define(
        "Serie",
        {
            title: DataTypes.STRING,
            coverArt: DataTypes.STRING

        },
        { tableName: "series" }
    );
    Serie.associate = function (models) {
       Serie.hasMany(models.Season, { as: "seasons" });
    };
    return Serie;
};