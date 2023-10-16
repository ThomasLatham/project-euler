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

/**
 * Sums the even Fibonacci numbers, up to and including the given `maxAddend`.
 *
 * Makes use of the fact that F_e(n) = 4F_e(n - 1) + F_e(n - 2), starting with 0 and 2.
 *
 * @param maxAddend The maximum addend to be added to the sum.
 * @returns The sum of all even Fiboannci numbers less than or equal to the `maxAddend`.
 */
const sumEvenFibonacciNumbersV2 = (maxAddend: number): number => {
  let prev: number = 0;
  let cur: number = 2;
  let sum: number = 0;

  while (cur <= maxAddend) {
    sum += cur;
    const next = cur * 4 + prev;
    prev = cur;
    cur = next;
  }
  return sum;
};

/**
 * Sums the even Fibonacci numbers, up to and including the given `maxAddend`.
 *
 * Makes use of the fact that F_Σe(n) = 4F_Σe(n - 1) + F_Σe(n - 2) + 2, starting with 0 and 2.
 *
 * @param maxAddend The maximum addend to be added to the sum.
 * @returns The sum of all even Fiboannci numbers less than or equal to the `maxAddend`.
 */
const sumEvenFibonacciNumbersV3 = (maxAddend: number): number => {
  let prev: number = 0;
  let cur: number = 2;

  while (cur - prev < maxAddend) {
    const next = cur * 4 + prev + 2;
    prev = cur;
    cur = next;
  }

  return prev;
};

export {
  sumEvenFibonacciNumbers,
  sumEveryThirdFibonacciNumber,
  sumEvenFibonacciNumbersV2,
  sumEvenFibonacciNumbersV3,
};
