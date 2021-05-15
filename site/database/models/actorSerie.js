module.exports = (sequelize, DataTypes) => {
    const ActorSerie = sequelize.define(
        "ActorSerie",
        {
            screentime: DataTypes.INTEGER(10),
        },
        {
            tableName: "actorSerie",
        }
    );

    return ActorSerie;
};