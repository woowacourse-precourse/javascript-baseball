const { Random, Console } = require("@woowacourse/mission-utils");

function getTargetNumber() {
  let randomNumbers = "";
  while (randomNumbers.length < 3) {
    const rendomNumber = Random.pickNumberInRange(1, 9);
    if (randomNumbers.includes(rendomNumber) === false)
      randomNumbers += rendomNumber;
  }
  return randomNumbers;
}

function getBallCount(userInputNumber, targetNumber) {
  return [...targetNumber].filter(
    (number, index) =>
      [...userInputNumber].includes(number) &&
      number !== [...userInputNumber][index]
  ).length;
}

function getStrikeCount(userInputNumber, targetNumber) {
  return [...targetNumber].filter(
    (number, index) => number === [...userInputNumber][index]
  ).length;
}

function printHint(ballCount, strikeCount) {
  if (ballCount === 0 && strikeCount === 0) return Console.print("낫싱");

  const ballMessage = ballCount !== 0 ? `${ballCount}볼 ` : "";
  const strikeMessage = strikeCount !== 0 ? `${strikeCount}스트라이크` : "";
  const gameMessage = `${ballMessage}${strikeMessage}`;

  Console.print(gameMessage);
}

function isValidInput(userInput) {
  if (userInput.length !== 3) return false;
  if (userInput.includes("0")) return false;
  if (new Set([...userInput]).size !== 3) return false;
  return true;
}

module.exports.getTargetNumber = getTargetNumber;
module.exports.getBallCount = getBallCount;
module.exports.getStrikeCount = getStrikeCount;
module.exports.printHint = printHint;
module.exports.isValidInput = isValidInput;
