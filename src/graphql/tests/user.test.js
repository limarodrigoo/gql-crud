const chai = require("chai");
const sinon = require("sinon");
const { faker } = require("@faker-js/faker");
const expect = chai.expect;
const { User } = require("../../db/models/index");
const {
  createNewUser,
  findAllUsers,
  findUserById,
} = require("../modules/users/repository");

describe("User sample", function () {
  const stubUserValue = {
    id: faker.random.numeric(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    hourlyRate: Math.round(Math.random() * 100),
  };
  describe("create user", function () {
    it("should add a new user to the db", async function () {
      const stub = sinon.stub(User, "create").returns(stubUserValue);
      const userCreated = createNewUser({
        firstName: stubUserValue.firstName,
        lastName: stubUserValue.lastName,
        email: stubUserValue.email,
        hourlyRate: stubUserValue.hourlyRate,
      });
      expect(stub.calledOnce).to.be.true;
      expect(userCreated).to.equal(stubUserValue);
      stub.restore();
    });
  });
  describe("query users", function () {
    it("should return all users", async function () {
      const stub = sinon.stub(User, "findAll").returns(stubUserValue);
      const allUsers = findAllUsers();
      expect(stub.calledOnce).to.be.true;
      expect(allUsers).to.equal(stubUserValue);
      stub.restore();
    });
    it("should return one user", async function () {
      const stub = sinon.stub(User, "findByPk").returns(stubUserValue);
      const user = await findUserById(stubUserValue.id);
      expect(stub.calledOnce).to.be.true;
      expect(user).to.equal(stubUserValue);
    });
  });
});
