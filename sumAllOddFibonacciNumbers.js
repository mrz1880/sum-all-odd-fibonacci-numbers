function sumFibs(num) {
  validateNum(num);

  const fibSequence = generateFibSequence(num);
  const fibSequenceWithOnlyOddNumber = filterOddNumber(fibSequence);
  const sumOfOddNumber = addNumbersFromArray(fibSequenceWithOnlyOddNumber);
  return sumOfOddNumber;
}

function validateNum(num) {
  if (num < 1) {
    throw new Error("You must provide a number greater than 0.");
  }
  if (typeof num !== "number") {
    throw new Error("You must provide a number.");
  }
}
function generateFibSequence(num) {
  const fibSequence = [1, 1];
  let nextFib = 0;
  while ((nextFib = fibSequence[0] + fibSequence[1]) <= num) {
    fibSequence.unshift(nextFib);
  }
  return fibSequence;
}

function filterOddNumber(array) {
  return array.filter((item) => item % 2 !== 0);
}

function addNumbersFromArray(array) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

module.exports = {
  sumFibs,
};
