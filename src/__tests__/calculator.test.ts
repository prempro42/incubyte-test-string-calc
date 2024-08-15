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

  test("should return the sum of n numbers", () => {
    expect(add("1,5,4")).toBe(10);
    expect(add("5,5,7,8")).toBe(25);
    expect(add("4,3,99,100")).toBe(206);
    expect(add("7,2,1000,150000,21")).toBe(151030);
  });

  test("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("4\n5\n6")).toBe(15);
  });
});
