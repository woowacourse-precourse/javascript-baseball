const MissionUtils = require("@woowacourse/mission-utils");
const config = require("./config/config");

function generateNumberList(size) {
  const result = [];
  while (result.length < size) {
    const number = MissionUtils.Random.pickNumberInRange(
      config.START_GAME_NUM,
      config.END_GAME_NUM
    );
    if (!result.includes(number)) {
      result.push(number);
    }
  }
  return result;
}

function getStrikeCount(computerNumber, userNumber) {
  let count = 0;
  for (let i = 0; i < config.GAME_NUM_SIZE; i++) {
    if (computerNumber[i] === userNumber[i]) {
      count++;
    }
  }
  return count;
}

function getSameNumberCount(computerNumber, userNumber) {
  let count = 0;
  for (let i = 0; i < config.GAME_NUM_SIZE; i++) {
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
  MissionUtils.Console.print(resultMessage);
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

function isValidNumberCheck(inputList) {
  const inputNumbers = [];

  if (inputList.length !== config.GAME_NUM_SIZE) {
    return 0;
  }

  for (let i = 0; i < config.GAME_NUM_SIZE; i++) {
    if (
      !(
        inputList[i] >= config.START_GAME_NUM &&
        inputList[i] <= config.END_GAME_NUM
      )
    ) {
      return 0;
    }
    if (inputNumbers.includes(inputList[i])) {
      return 0;
    }
    inputNumbers.push(inputList[i]);
  }
  return 1;
}

function isValidControlCheck(input) {
  if (input !== 1 && input !== 2) {
    return 0;
  }
  return 1;
}

class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    let computerNumber = generateNumberList(config.GAME_NUM_SIZE);
    let control = 1;
    let userNumber = 0;
    let scoreObject = {};

    while (control === 1) {
      userNumber = readNumber();
      console.log("userNumber", userNumber);
      if (isValidNumberCheck(userNumber) !== 1) {
        throw "숫자가 유효하지 않습니다.";
      }

      scoreObject = compareNumber(computerNumber, userNumber);
      printScore(scoreObject);

      if (scoreObject.strike === config.GAME_NUM_SIZE) {
        MissionUtils.Console.print(
          `${config.GAME_NUM_SIZE}개의 숫자를 모두 맞히셨습니다! 게임 종료`
        );
        control = readControlNumber();
      }
      if (isValidControlCheck(control) !== 1) {
        throw "입력값이 유효하지 않습니다.";
      }
      if (scoreObject.strike === config.GAME_NUM_SIZE && control === 1) {
        computerNumber = generateNumberList(config.GAME_NUM_SIZE);
      }
    }
  }
}

module.exports = App;
