const MissionUtils = require("@woowacourse/mission-utils");

// game setting
const START_GAME_NUM = 1;
const END_GAME_NUM = 9;
const GAME_NUM_SIZE = 3;

function generateNumberList(size) {
  const result = [];
  while (result.length < size) {
    const number = MissionUtils.Random.pickNumberInRange(
      START_GAME_NUM,
      END_GAME_NUM
    );
    if (!result.includes(number)) {
      result.push(number);
    }
  }
  return result;
}

function getStrikeCount(computerNumber, userNumber) {
  let count = 0;
  for (let i = 0; i < GAME_NUM_SIZE; i++) {
    if (computerNumber[i] === userNumber[i]) {
      count++;
    }
  }
  return count;
}

function getSameNumberCount(computerNumber, userNumber) {
  let count = 0;
  for (let i = 0; i < GAME_NUM_SIZE; i++) {
    if (userNumber.includes(computerNumber[i])) {
      count++;
    }
  }
  return count;
}

function compareNumber(computerNumber, userNumber) {
  const strike = getStrikeCount(computerNumber, userNumber);
  const sameNumber = getSameNumberCount(computerNumber, userNumber);
  return { strike: strike, ball: sameNumber - strike };
}

function printScore(scoreObject) {
  let resultMessage = "";
  if (scoreObject.ball) {
    resultMessage += scoreObject.ball + "볼";
  }
  if (scoreObject.strike) {
    resultMessage += (resultMessage && " ") + scoreObject.strike + "스트라이크";
  }
  if (!scoreObject.ball && !scoreObject.strike) {
    resultMessage = "낫싱";
  }
  return resultMessage;
}

function readNumber() {
  let answerList = [];
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
    const inputList = Array.from(input);
    inputList.map((number) => {
      answerList.push(parseInt(number));
    });
  });
  return answerList;
}

function readControlNumber() {
  let answer = -1;
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (input) => {
      answer = parseInt(input);
    }
  );
  return answer;
}

function validNumberCheck(inputList) {
  const inputNumbers = [];

  if (inputList.length !== GAME_NUM_SIZE) {
    return 0;
  }

  for (let i = 0; i < GAME_NUM_SIZE; i++) {
    if (!(inputList[i] >= 1 && inputList[i] <= 9)) {
      return 0;
    }
    if (inputNumbers.includes(inputList[i])) {
      return 0;
    }
    inputNumbers.push(inputList[i]);
  }
  return 1;
}

function validControlCheck(input) {
  if (input !== 1 && input !== 2) {
    return 0;
  }
  return 1;
}

class App {
  play() {}
}

module.exports = App;
