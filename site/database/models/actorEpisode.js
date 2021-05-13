module.exports = (sequelize, DataTypes) => {
    const ActorEpisode = sequelize.define(
        "ActorEpisode",
        {
            screentime: DataTypes.INTEGER(10),
        },
        {
            tableName: "actorepisode",
        }
    );

    return ActorEpisode;
};
