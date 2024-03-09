const getNoun = (
  number: number,
  nounForOne: string,
  nounForTwo: string,
  nounForFive: string
) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return nounForFive;
  }
  n %= 10;
  if (n === 1) {
    return nounForOne;
  }
  if (n >= 2 && n <= 4) {
    return nounForTwo;
  }
  return nounForFive;
};

export default getNoun;
