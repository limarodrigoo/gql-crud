const chai = require("chai");
const sinon = require("sinon");
const { faker } = require("@faker-js/faker");
const expect = chai.expect;
const { User } = require("../../db/models/index");
const { createNewUser } = require("../modules/users/repository");

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
});
