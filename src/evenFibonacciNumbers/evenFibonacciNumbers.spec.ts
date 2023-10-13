import {
  sumEvenFibonacciNumbers,
  sumEveryThirdFibonacciNumber,
} from "./evenFibonacciNumbers";

describe("Project Euler Problem 2: Even Fibonacci Numbers", () => {
  let ANSWER: number;

  beforeEach(() => {
    ANSWER = 4613732;
  });

  it("sumEvenFibonacciNumbers() returns the right answer for Project Euler", () => {
    expect(sumEvenFibonacciNumbers(4000000)).toEqual<number>(ANSWER);
  });

  it("sumEveryThirdFibonacciNumber() returns the right answer for Project Euler", () => {
    expect(sumEvenFibonacciNumbers(4000000)).toEqual<number>(ANSWER);
  });

  it("sumEvenFibonacciNumbers() and sumEveryThirdFibonacciNumber() return the same values", () => {
    const BASELINE: number[] = [
      0, 10, 100, 1000, 10000, 100000, 1000000, 10000000,
    ];
    for (const baselineValue of BASELINE) {
      expect(sumEvenFibonacciNumbers(baselineValue)).toEqual<number>(
        sumEveryThirdFibonacciNumber(baselineValue)
      );
    }
  });
});
