const MissionUtils = require("@woowacourse/mission-utils");
const { isExceptionDetection } = require("./exceptionFunctions");

const strikeCalculation = (answer, userNumber) => {
  let count = 0;
  answer.forEach((number, index) => {
    if (number === userNumber[index]) count++;
  });
  return count;
};

const ballCalculation = (answer, userNumber) => {
  let count = 0;
  answer.forEach((number, index) => {
    if (number !== userNumber[index] && userNumber.includes(number)) count++;
  });
  return count;
};

const gameResultOutput = (strikeNum, ballNum) => {
  if (strikeNum === 0 && ballNum === 0) {
    MissionUtils.Console.print("낫싱");
    return 0;
  }

  if (strikeNum !== 3) {
    let message = "";
    message += ballNum > 0 ? `${ballNum}볼` : "";
    message += ballNum > 0 && strikeNum > 0 ? " " : "";
    message += strikeNum > 0 ? `${strikeNum}스트라이크` : "";
    MissionUtils.Console.print(message);
    return 0;
  }

  if (strikeNum === 3) {
    MissionUtils.Console.print(
      `3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
    );
    return 1;
  }
};

const gameRestartResult = (number) => {
  if (number === 1) {
    let answer = randomNumberSetting();
    gameProgressQuestion(answer);
  }

  if (number === 2) {
    MissionUtils.Console.close();
  }
};

const randomNumberSetting = () => {
  let randomNumberArray = [];
  while (randomNumberArray.length < 3) {
    let randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    if (randomNumberArray.includes(randomNumber)) continue;
    randomNumberArray.push(randomNumber);
  }
  return randomNumberArray;
};

const gameStartPhrase = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
};

const gameRestartQuestion = () => {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (number) => {
      number = Number(number);

      if (number !== 1 && number !== 2) {
        throw "잘못된 값을 입력하였습니다.";
      }

      gameRestartResult(number);
    }
  );
};

const gameProgressQuestion = (answer) => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
    if (isExceptionDetection(number)) {
      throw "잘못된 값을 입력하였습니다.";
    }

    let userNumberArray = number.split("").map((num) => Number(num));
    let strikeNum = strikeCalculation(answer, userNumberArray);
    let ballNum = ballCalculation(answer, userNumberArray);

    const gameResult = gameResultOutput(strikeNum, ballNum, answer);

    if (gameResult === 0) gameProgressQuestion(answer);
    if (gameResult === 1) gameRestartQuestion();
  });
};

module.exports = {
  strikeCalculation,
  ballCalculation,
  gameResultOutput,
  gameRestartResult,
  randomNumberSetting,
  gameProgressQuestion,
  gameRestartQuestion,
  gameStartPhrase,
};
