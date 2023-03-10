const chai = require("chai");
const sinon = require("sinon");
const { faker } = require("@faker-js/faker");
const expect = chai.expect;
const { User } = require("../../db/models/index");
const {
  createUser,
  queryUserById,
  queryUsers,
  updateUser,
  deleteUser,
} = require("../modules/users/service");

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
      const userCreated = createUser(null, {
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
    before(function () {});
    it("should return all users", async function () {
      const stub = sinon.stub(User, "findAll").returns(stubUserValue);
      const allUsers = queryUsers();
      expect(stub.calledOnce).to.be.true;
      expect(allUsers).to.equal(stubUserValue);
      stub.restore();
    });
    it("should return one user", async function () {
      const stub = sinon.stub(User, "findByPk").returns(stubUserValue);
      const user = await queryUserById(null, stubUserValue.id);
      expect(stub.calledOnce).to.be.true;
      expect(user).to.equal(stubUserValue);
      stub.restore();
    });
  });
  describe("update users", function () {
    it("update user should return true when succesfull", async function () {
      const stub = sinon.stub(User, "update").returns([1]);
      const response = await updateUser(null, stubUserValue);
      expect(stub.calledOnce).to.be.true;
      expect(response).to.be.true;
      stub.restore();
    });
    it("should return false when not succesfull", async function () {
      const stub = sinon.stub(User, "update").returns([0]);
      const response = await updateUser(null, stubUserValue);
      expect(stub.calledOnce).to.be.true;
      expect(response).to.be.false;
      stub.restore();
    });
  });
  describe("delete user", function () {
    it("delete user should return true", async function () {
      const stub = sinon.stub(User, "destroy").returns(1);
      const response = await deleteUser(null, stubUserValue.id);
      expect(stub.calledOnce).to.be.true;
      expect(response).to.be.true;
      sinon.restore();
    });
    it("when delete user fail should return false", async function () {
      const stub = sinon.stub(User, "destroy").returns(0);
      const response = await deleteUser(null, stubUserValue.id);
      expect(stub.calledOnce).to.be.true;
      expect(response).to.be.false;
      sinon.restore();
    });
  });
});
