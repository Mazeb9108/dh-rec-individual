"use strict";
module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define(
        "Movie",
        {
            title: DataTypes.STRING,
            movieAwards: DataTypes.INTEGER(10).UNSIGNED,
            revenue: DataTypes.STRING,
            releaseDate: DataTypes.DATE,
            length: DataTypes.INTEGER(10).UNSIGNED,
            coverArt: DataTypes.STRING,
        },
        { tableName: "movies" }
    );
    Movie.associate = function (models) {
        Movie.belongsTo(models.Genre, {
            as: "genres",
            foreignKey: "genreId"
        });
    
    Movie.associate = function (models) {
        Movie.belongsToMany(models.Actor, {
            as: "actors",
            through: "actorMovie",
            foreignKey: "movieId",
            otherKey: "actorId",
            timestamp: false
        });
    };
    };
    return Movie;
};
