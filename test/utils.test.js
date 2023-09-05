import { describe, it } from "mocha";
import { expect } from "chai";
import { validInput } from "../utils/utils.js";
import { isTruthyValue } from "../utils/utils.js";

describe("Test Utility functions", function () {
  it("validates an input string", function () {
    expect(["yaw", "diabene Yaw", "func"].every((value) => validInput(value))).to.equal(true);
  });
});

describe("Array", function () {
  it("does tests on an array", function () {
    expect(isTruthyValue([])).to.equal("truthy");
  });
});
