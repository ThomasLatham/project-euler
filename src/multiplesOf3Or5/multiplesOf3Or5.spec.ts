import {
  sequenceDifferencePatternSolution,
  simpleSolution,
} from "./multiplesOf3Or5";

describe("Project Euler Problem 1: Multiples of 3 or 5", () => {
  const ANSWER = 233168;

  it("simpleSolution", () => {
    expect(simpleSolution(1000)).toBe(ANSWER);
  });

  it("sequenceDifferencePatternSolution", () => {
    expect(sequenceDifferencePatternSolution(1000)).toBe(ANSWER);
  });
});
