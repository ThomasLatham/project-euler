/**
 * Uses brute force to solve the problem.
 *
 * @param maxAddend The maximum addend to be added to the sum.
 * @returns The sum of all numbers less than `maxAddend` which are divisible by 3 or 5.
 */
const simpleSolution = (maxAddend: number): number => {
  let sum: number = 0;
  for (let i = 1; i < maxAddend; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
};

/**
 * Solves the problem by taking advantage of the fact that, in the sequence of
 * natural numbers divisible by 3 or 5, there is a pattern to determine how
 * much greater the n+1st element is than the nth.
 *
 * @param maxAddend The maximum addend to be added to the sum.
 * @returns The sum of all numbers less than `maxAddend` which are divisible by 3 or 5.
 */
const sequenceDifferencePatternSolution = (maxAddend: number): number => {
  const pattern: number[] = [3, 2, 1, 3, 1, 2, 3];
  let curAddend: number = 0;
  let sum: number = 0;
  let patternIndex = 0;

  while (curAddend < maxAddend) {
    sum += curAddend;
    curAddend += pattern[patternIndex++ % 7];
  }

  return sum;
};

export { simpleSolution, sequenceDifferencePatternSolution };
