import { describe, it } from "mocha";
import { expect } from "chai";
import { validInput } from "../utils/utils.js";
import { isTruthyValue, validateReqObj, read } from "../utils/utils.js";

describe("Test Utility functions", function () {
  it("validates an input string", function () {
    expect(["yaw", "diabene Yaw", "func"].every((value) => validInput(value))).to.equal(true);
  });

  it("reads some filePaths", function () {
    expect(read("/public/blog")).to.not.equal("/public/blog");
  });
});

describe("Array", function () {
  it("does tests on an array", function () {
    expect(isTruthyValue([])).to.equal("truthy");
  });
});

describe("Validation", function () {
  it("validates a request objects body", function () {
    expect(
      validateReqObj(
        {
          author: "Stiff Stiff",
          tag: "eyy"
        },
        ["title", "content", "tag", "author"]
      )
    ).to.be.an("object");
  });
});

describe("object assignment confirmation", function () {
  it("Checks if an object returns the correct data", function () {
    expect({}).to.be.equal({});
  });
});
