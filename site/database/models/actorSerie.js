module.exports = (sequelize, DataTypes) => {
    const ActorSerie = sequelize.define(
        "ActorEpisode",
        {
            screentime: DataTypes.INTEGER(10),
        },
        {
            tableName: "actorepisode",
        }
    );

    return ActorSerie;
};