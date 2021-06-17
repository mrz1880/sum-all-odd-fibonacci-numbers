const { sumFibs } = require("./sumAllOddFibonacciNumbers");

describe("Sum All Odd Fibonacci Numbers", () => {
  it("sumFibs() should throw an error.", () => {
    const result = () => {
      sumFibs("toto");
    };
    expect(result).toThrowError("You must provide a number.");
  });
  it("sumFibs() should throw an error.", () => {
    const result = () => {
      sumFibs();
    };
    expect(result).toThrowError("You must provide a number.");
  });
  it("sumFibs(-1) should throw an error.", () => {
    const result = () => {
      sumFibs(-1);
    };
    expect(result).toThrowError("You must provide a number greater than 0.");
  });
  it("sumFibs(1) should return a number.", () => {
    const result = sumFibs(1);
    expect(result).toBeNumber();
  });
  it("sumFibs(1) should return 2.", () => {
    const result = sumFibs(1);
    expect(result).toBe(2);
  });
  it("sumFibs(2) should return 2.", () => {
    const result = sumFibs(2);
    expect(result).toBe(2);
  });
  it("sumFibs(3) should 2.", () => {
    const result = sumFibs(3);
    expect(result).toBe(5);
  });
});
