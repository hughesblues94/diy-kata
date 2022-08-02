const numberToReversedDigits = (number) => {
  arr = String(number)
    .split("")
    .map((str) => Number(str))
    .reverse();
  return arr;
};

module.exports = numberToReversedDigits;
