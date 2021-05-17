module.exports = (sequelize, DataTypes) => {
    const ActorEpisode = sequelize.define(
        "ActorEpisode",
        {
            screentime: DataTypes.FLOAT(3,1),
        },
        {
            tableName: "actorepisode",
        }
    );

    return ActorEpisode;
};
