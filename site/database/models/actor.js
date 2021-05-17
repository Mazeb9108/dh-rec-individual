"use strict";
module.exports = (sequelize, DataTypes) => {
    const Actor = sequelize.define(
        "Actor",
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            rating: DataTypes.DECIMAL(3,1),
            profilePic: DataTypes.STRING,
            
        },
        { tableName: "actors" }
    );

    Actor.associate = function (models) {
        Actor.belongsTo(models.Movie, {
            as: "favoriteMovie",
            foreignKey: "favoriteMovieId",
        });
        Actor.belongsToMany(models.Movie, {
            as: "movies",
            through: models.ActorMovie,
            foreignKey: "actorId",
        });
   /*  Actor.associate = function (models) {
        Actor.belongsTo(models.Movie, {
            as: "favoriteMovie",
            foreignKey: "favoriteMovieId",
        });
        Actor.belongsToMany(models.Episode, {
            as: "episodes",
            through: "actorEpisode",
            foreignKey: "actorId",
            otherKey: "episodeId",
            timestamp: false
        });
          
        Actor.belongsToMany(models.Movie, {
            as: "movies",
            through: models.actorMovie,
            foreignKey: "actorId",
        
        });
        Actor.belongsToMany(models.Serie, {
            as: "series",
            through: models.actorSerie,
            foreignKey: "actorId",
            otherKey: "serieId",
            timestamp: false
        });
    }; */
    }
    return Actor;
};
