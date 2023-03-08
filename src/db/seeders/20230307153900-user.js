"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "Rodrigo",
        lastName: "Lima",
        email: "rodrigo@teste.com",
        hourlyRate: 32.1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Gabriel",
        lastName: "lobo",
        email: "lobo@teste.com",
        hourlyRate: 42.1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Emanuele",
        lastName: "Silva",
        email: "emanuelle@teste.com",
        hourlyRate: 22.1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Lucas",
        lastName: "texugo",
        email: "lucas@teste.com",
        hourlyRate: 52.1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
