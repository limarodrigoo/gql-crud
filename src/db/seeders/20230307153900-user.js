'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('Users', [{
      firstName: 'Rodrigo',
      lastName: 'Lima',
      email: 'rodrigo@teste.com',
      createdAt: new Date(),
      updatedAt: new Date()
   }])
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Users', null, {})
  }
};
