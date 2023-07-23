const simpleSolution = (maxAddend: number): number => {
  let sum: number = 0;
  for (let i = 1; i < maxAddend; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
};

const sequenceDifferencePatternSolution = (maxAddend: number): number => {
  const pattern: number[] = [3, 2, 1, 3, 1, 2, 3];
  let curAddend: number = 0;
  let sum: number = 0;
  let patternIndex = 0;

  while (curAddend < maxAddend) {
    curAddend += pattern[patternIndex++ % 7];
    sum += curAddend;
  }

  return sum;
};

export { simpleSolution, sequenceDifferencePatternSolution };
