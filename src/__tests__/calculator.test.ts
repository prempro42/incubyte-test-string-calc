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

  test("should handle a custom delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//-\n2-3-4")).toBe(9);
    expect(add("//^\n1^3^4^6")).toBe(14);
  });

  test("should throw an exception for negative numbers", () => {
    expect(() => add("21,0,-3")).toThrow("negative numbers not allowed: -3");
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
    expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2,-3");
    expect(() => add("-1,-2,-3,-4,-5,-6,-7,-8,-9")).toThrow(
      "negative numbers not allowed: -1,-2,-3,-4,-5,-6,-7,-8,-9"
    );
  });

  test("should multiply if custom delimiter is *", () => {
    expect(add("//*\n1*2")).toBe(2);
    expect(add("//*\n2*3*4")).toBe(24);
    expect(add("//*\n1*3*4*6")).toBe(72);
  });

  test("should handle a custom delimiter", () => {
    expect(add("//;*\n1;*2")).toBe(3);
    expect(add("//--\n2--3--4")).toBe(9);
    expect(add("//^$^\n1^$^3^$^4^$^6")).toBe(14);
    expect(add("//^xy\n1^xy3^xy4^xy6")).toBe(14);
  });

  test("if number appears more than 3 times, add cube of that number", () => {
    expect(add("//;\n1;2;2;2")).toBe(9);
    expect(add("//+\n3+2+3+1+3+3+3+3")).toBe(30);
    expect(add("//+\n3+2+3+1+3+3+3+3+4+6+1+4+3+4")).toBe(101);
  });
});
