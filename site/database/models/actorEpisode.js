module.exports = (sequelize, DataTypes) => {
    const ActorEpisode = sequelize.define(
        "ActorEpisode",
        {
            screentime: DataTypes.INTEGER(10),
        },
        {
            tableName: "actor_episode",
        }
    );

    return ActorEpisode;
};
