const getStrikeAndBallCount = (target, input) => {
  let [strikeCount, ballCount] = [0, 0];

  const [targetArray, inputArray] = [target.split(''), input.split('')];

  inputArray.forEach((inputSingleDigit, index) => {
    const targetSingleDigit = targetArray[index];
    const isStrike = inputSingleDigit === targetSingleDigit;
    const isBall = targetArray.includes(inputSingleDigit) && !isStrike;

    if (isStrike) strikeCount += 1;
    if (isBall) ballCount += 1;
  });

  return [strikeCount, ballCount];
};
