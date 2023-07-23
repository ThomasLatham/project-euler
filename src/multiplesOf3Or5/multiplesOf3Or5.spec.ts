import { simpleSolution } from "./multiplesOf3Or5";

describe("Multiples of 3 or 5", () => {
  const ANSWER = 233168;

  it("simpleSolution", () => {
    expect(simpleSolution(1000)).toBe(ANSWER);
  });

  it("sequenceDifferencePatternSolution", () => {
    expect(simpleSolution(1000)).toBe(ANSWER);
  });
});
