import { add } from "../utils/calculator";

describe("add function", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number for a single number input", () => {
    expect(add("1")).toBe(1);
    expect(add("7")).toBe(7);
    expect(add("21")).toBe(21);
  });

  test("should return the sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
    expect(add("5,5")).toBe(10);
    expect(add("4,3")).toBe(7);
    expect(add("7,2")).toBe(9);
  });
});
