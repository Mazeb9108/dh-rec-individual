'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Episodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      releaseDate: {
        type: Sequelize.DATE
      },
      length: {
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.DECIMAL
      },
      seasonId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'seasons',
            schema: 'movies_catchup'
          },
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Episodes');
  }
};