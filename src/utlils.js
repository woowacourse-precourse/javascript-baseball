const { Random, Console } = require("@woowacourse/mission-utils");

function getTargetNumber() {
  return [
    Random.pickNumberInRange(1, 9),
    Random.pickNumberInRange(1, 9),
    Random.pickNumberInRange(1, 9),
  ].join("");
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

  const ballMessage = ballCount !== 0 ? `${ballCount}볼` : "";
  const strikeMessage = strikeCount !== 0 ? `${strikeCount}스트라이크` : "";
  const gameMessage = `${ballMessage} ${strikeMessage}`;

  Console.print(gameMessage);
}

function isValidInput(userInputNumber) {
  if (
    userInputNumber.length !== 3 ||
    userInputNumber % 1 !== 0 ||
    new Set([...userInputNumber]).size !== 3 ||
    userInputNumber.includes("0")
  ) {
    throw new Error("유효하지 않은 값을 입력해 게임이 종료됩니다");
  }

  return userInputNumber;
}
module.exports.getTargetNumber = getTargetNumber;
module.exports.getBallCount = getBallCount;
module.exports.getStrikeCount = getStrikeCount;
module.exports.printHint = printHint;
