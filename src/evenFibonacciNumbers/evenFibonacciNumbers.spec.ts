import {
  sumEvenFibonacciNumbers,
  sumEvenFibonacciNumbersImproved,
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

    it("sumEvenFibonacciNumbersImproved() returns the right answer for Project Euler", () => {
      expect(sumEvenFibonacciNumbersImproved(4000000)).toEqual<number>(ANSWER);
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

    it("sumEvenFibonacciNumbers() and sumEvenFibonacciNumbersImproved() return the same values", () => {
      for (const baselineValue of BASELINE) {
        expect(sumEvenFibonacciNumbers(baselineValue)).toEqual<number>(
          sumEvenFibonacciNumbersImproved(baselineValue)
        );
      }
    });
  });
});
