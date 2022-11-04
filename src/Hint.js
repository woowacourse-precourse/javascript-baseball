const convertStringToArray = (string) => {
  return string.split("");
};

const countStrike = (correctNumber, inputNumber) => {
  let strikeCount = 0;
  const correctNumberArray = convertStringToArray(correctNumber);
  const inputNumberArray = convertStringToArray(inputNumber);

  for (let i = 0; i < correctNumber.length; i++) {
    if (correctNumberArray[i] === inputNumberArray[i]) strikeCount += 1;
  }

  return strikeCount;
};

const countBall = (correctNumber, inputNumber, strikeCount) => {
  const correctNumberArray = convertStringToArray(correctNumber);
  const inputNubmerArray = convertStringToArray(inputNumber);
  const sameNumberArray = correctNumberArray.filter((number) =>
    inputNubmerArray.includes(number)
  );

  return sameNumberArray.length - strikeCount;
};

const convertCountToHintString = (strikeCount, ballCount) => {
  let hint = "";

  if (ballCount > 0) hint += `${ballCount}볼 `;
  if (strikeCount > 0) hint += `${strikeCount}스트라이크`;
  if (hint.length === 0) hint += `낫싱`;

  return hint;
};

const getHint = (correctNumber, inputNumber) => {
  const strikeCount = countStrike(correctNumber, inputNumber);
  const ballCount = countBall(correctNumber, inputNumber, strikeCount);
  const hint = convertCountToHintString(strikeCount, ballCount);

  return hint;
};

module.exports = getHint;
