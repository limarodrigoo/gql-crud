const chai = require("chai");
const sinon = require("sinon");
const { faker } = require("@faker-js/faker");
const expect = chai.expect;
const { Projects } = require("../../db/models/index");
const {
  createNewProject,
  queryProjects,
  queryProjectById,
  projectUpdate,
} = require("../modules/projects/service");

describe("Project sample", function () {
  const stubProjectValue = {
    id: faker.random.numeric(),
    title: faker.lorem.lines(),
    description: faker.lorem.paragraph(1),
    userId: faker.random.numeric(),
  };
  describe("create project", function () {
    it("should return the project created", function async() {
      const stub = sinon.stub(Projects, "create").returns(stubProjectValue);
      const projectCreated = createNewProject(null, {
        title: stubProjectValue.title,
        description: stubProjectValue.description,
        userId: stubProjectValue.userId,
      });
      expect(stub.calledOnce).to.be.true;
      expect(projectCreated).to.be.equal(stubProjectValue);
      stub.restore();
    });
  });
  describe("Query projects", function () {
    it("should return all projects", async function () {
      const stub = sinon.stub(Projects, "findAll").returns(stubProjectValue);
      const allProjects = await queryProjects();
      expect(stub.calledOnce).to.be.true;
      expect(allProjects).to.be.equal(allProjects);
      stub.restore();
    });
    it("should return a specific project", async function () {
      const stub = sinon.stub(Projects, "findByPk").returns(stubProjectValue);
      const projects = await queryProjectById(null, {
        id: stubProjectValue.id,
      });
      console.log("projects");
      expect(stub.calledOnce).to.be.true;
      expect(projects).to.be.equal(stubProjectValue);
      stub.restore();
    });
    it("if none project was found should return a error message", function () {
      const stub = sinon.stub(Projects, "findByPk").returns(null);
      const project = queryProjectById(null, { id: 0 });
      expect(stub.calledOnce).to.be.true;
      expect(project.message).to.be.equal("Project not found");
      stub.restore();
    });
  });
  describe("Update projects", function async() {
    it("should return true when succesfull", async function () {
      const stub = sinon.stub(Projects, "update").returns([1]);
      const result = await projectUpdate(null, { stubProjectValue });
      expect(stub.calledOnce).to.be.true;
      expect(result).to.be.true;
      stub.restore();
    });
    it("should return false when something wents wrong", async function () {
      const stub = sinon.stub(Projects, "update").returns([0]);
      const result = await projectUpdate(null, { stubProjectValue });
      expect(stub.calledOnce).to.be.true;
      expect(result).to.be.false;
      stub.restore();
    });
  });
});
