"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const nock = require("nock");

const { baseReq, commentReq, commitReq1, commitReq2 } = require("./response");
const { findThePulls } = require("../github");
const { runServer, closeServer } = require("../server");
const { expect } = chai;

chai.use(chaiHttp);

describe("Git hub Pulls", function() {
  before(function() {
    return runServer();
  });

  beforeEach(function() {});

  after(function() {
    return closeServer();
  });

  describe("Find The Pulls", function() {
    nock("https://api.github.com/repos/testOwner/testRepo/pulls")
      .get("")
      .reply(200, baseReq)
      .get("/3892/commits")
      .reply(200, commitReq1)
      .get("/3882/commits")
      .reply(200, commitReq2)
      .get("/3892/comments")
      .reply(200, commentReq)
      .get("/3882/comments")
      .reply(200, commentReq);

    // This function is used by both the POST and GET requests
    it("should return pull request info", function() {
      return findThePulls("testOwner", "testRepo").then(res => {
        expect(res).to.be.an("array");
        expect(res.length).to.equal(2);
        expect(res[0]).to.include.keys(
          "number",
          "user",
          "commitCount",
          "commentCount"
        );
        expect(res[0].number).to.be.a("number");
        expect(res[0].commitCount).to.be.a("number");
        expect(res[0].commentCount).to.be.a("number");
        expect(res[0].user).to.be.a("string");
      });

      // If this was a production build for something that people would
      // really use I would go through and make some error tests as well
    });
  });
});
