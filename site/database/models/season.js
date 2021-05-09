"use strict";
module.exports = (sequelize, DataTypes) => {
    const Season = sequelize.define(
        "Season",
        {
            name: DataTypes.STRING,
        },
        { tableName: "seasons" }
    );
    
    return Season;
};
