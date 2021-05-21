module.exports = (sequelize, DataTypes) => {
    const ActorEpisode = sequelize.define(
        "ActorEpisode",
        {
            screentime: DataTypes.FLOAT
        },
        {
            tableName: "actorepisode",
        }
    );

    return ActorEpisode;
};
