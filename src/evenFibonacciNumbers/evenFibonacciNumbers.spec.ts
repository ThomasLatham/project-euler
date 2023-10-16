import {
  sumEvenFibonacciNumbers,
  sumEvenFibonacciNumbersV2,
  sumEvenFibonacciNumbersV3,
  sumEveryThirdFibonacciNumber,
} from "./evenFibonacciNumbers";

describe("Project Euler Problem 2: Even Fibonacci Numbers", () => {
  describe("Answer checkers", () => {
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

    it("sumEvenFibonacciNumbersV2() returns the right answer for Project Euler", () => {
      expect(sumEvenFibonacciNumbersV2(4000000)).toEqual<number>(ANSWER);
    });

    it("sumEvenFibonacciNumbersV3() returns the right answer for Project Euler", () => {
      expect(sumEvenFibonacciNumbersV3(4000000)).toEqual<number>(ANSWER);
    });
  });

  describe("Equivalence demonstrators", () => {
    let BASELINE: number[];

    beforeEach(() => {
      BASELINE = [0, 10, 100, 1000, 10000, 100000, 1000000, 10000000];
    });

    it("sumEvenFibonacciNumbers() and sumEveryThirdFibonacciNumber() return the same values", () => {
      for (const baselineValue of BASELINE) {
        expect(sumEvenFibonacciNumbers(baselineValue)).toEqual<number>(
          sumEveryThirdFibonacciNumber(baselineValue)
        );
      }
    });

    it("sumEvenFibonacciNumbers() and sumEvenFibonacciNumbersV2() return the same values", () => {
      for (const baselineValue of BASELINE) {
        expect(sumEvenFibonacciNumbers(baselineValue)).toEqual<number>(
          sumEvenFibonacciNumbersV2(baselineValue)
        );
      }
    });

    it("sumEvenFibonacciNumbers() and sumEvenFibonacciNumbersV3() return the same values", () => {
      for (const baselineValue of BASELINE) {
        expect(sumEvenFibonacciNumbers(baselineValue)).toEqual<number>(
          sumEvenFibonacciNumbersV3(baselineValue)
        );
      }
    });
  });
});
