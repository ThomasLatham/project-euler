/**
 * Sums the even Fibonacci numbers, up to and including the given `maxAddend`.
 *
 * @param maxAddend The maximum addend to be added to the sum.
 * @returns The sum of all even Fiboannci numbers less than or equal to the `maxAddend`.
 */
const sumEvenFibonacciNumbers = (maxAddend: number): number => {
  let prev: number = 1;
  let cur: number = 1;
  let sum: number = 0;

  while (cur <= maxAddend) {
    sum += cur % 2 == 0 ? cur : 0;
    const temp = cur;
    cur += prev;
    prev = temp;
  }

  return sum;
};

/**
 * Sums the every third Fibonacci number, up to and including the given `maxAddend`.
 *
 * @param maxAddend The maximum addend to be added to the sum.
 * @returns The sum of every third Fiboannci number less than or equal to the `maxAddend`.
 */
const sumEveryThirdFibonacciNumber = (maxAddend: number): number => {
  let prev: number = 1;
  let cur: number = 1;
  let sum: number = 0;
  let curIndex = 2;

  while (cur <= maxAddend) {
    sum += curIndex++ % 3 == 0 ? cur : 0;
    const temp = cur;
    cur += prev;
    prev = temp;
  }

  return sum;
};

export { sumEvenFibonacciNumbers, sumEveryThirdFibonacciNumber };
