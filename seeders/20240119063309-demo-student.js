'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('students', [{
            studentName: "John",
            email: 'john.doe@google.com',
            contactNumber: "222334673",
            gender: "Male",
            dateOfBirth: "1998-07-23",
            createdAt: new Date(),
            updatedAt: new Date()
        }]);

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

    }
};