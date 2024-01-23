'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.changeColumn('addresses', 'createdAt', {
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
                allowNull: true
            }),
            await queryInterface.changeColumn('addresses', 'createdBy', {
                type: Sequelize.UUID,
                allowNull: true
            })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('addresses');
    }
};