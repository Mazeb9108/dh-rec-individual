module.exports = (sequelize, DataTypes) => {
    const ActorMovie = sequelize.define(
        "ActorMovie",
        {
            screentime: DataTypes.INTEGER(10),
        },
        { tableName: "actormovie", }
    );


    return ActorMovie;
};
