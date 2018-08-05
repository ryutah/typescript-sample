import { add } from "./math";

import * as chai from "chai";
import * as mocha from "mocha";

const expect = chai.expect;
describe("My math library", () => {
  it("should be able to add things correctly", () => {
    expect(add(3, 4)).to.equal(7);
  });
});
