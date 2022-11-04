const MissionUtils = require("@woowacourse/mission-utils");

const gameStartPhrase = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
};

const gameRestartQuestion = () => {
  MissionUtils.Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
    (number) => {
      number = Number(number);
      if (number === 1) {
        let answer = randomNumberSetting();
        userInput(answer);
      }

      if (number === 2) {
        MissionUtils.Console.close();
      }

      if (number !== 1 && number !== 2) {
        throw "잘못된 값을 입력하였습니다.";
      }
    }
  );
};

const isNotNumber = (number) => {
  return isNaN(Number(number));
};

const isContainsNumberZero = (number) => {
  return number.includes("0");
};

const isDuplicate = (number) => {
  const set = new Set();
  set.add(number[0]);
  set.add(number[1]);
  set.add(number[2]);

  if (set.size !== number.length) return true;
  return false;
};

const exceptionDetection = (number) => {
  if (number.length !== 3) return true;
  if (isNotNumber(number)) return true;
  if (isContainsNumberZero(number)) return true;
  if (isDuplicate(number)) return true;
  return false;
};

const userInput = (answer) => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
    if (exceptionDetection(number)) {
      throw "잘못된 값을 입력하였습니다.";
    }

    let userNumberArray = number.split("").map((num) => Number(num));
    let strikeNum = strikeCalculation(answer, userNumberArray);
    let ballNum = ballCalculation(answer, userNumberArray);

    if (strikeNum === 0 && ballNum === 0) {
      MissionUtils.Console.print("낫싱");
      userInput(answer);
    }

    if (strikeNum !== 3) {
      let message = "";
      message += ballNum ? `${ballNum}볼 ` : "";
      message += strikeNum ? `${strikeNum}스트라이크 ` : "";
      MissionUtils.Console.print(message);
      userInput(answer);
    }

    if (strikeNum === 3) {
      MissionUtils.Console.print(
        `3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료`
      );
      gameRestartQuestion();
    }
  });
};

const strikeCalculation = (answer, userNumber) => {
  let count = 0;
  for (let i = 0; i < 3; i++) {
    if (answer[i] === userNumber[i]) count++;
  }
  return count;
};

const ballCalculation = (answer, userNumber) => {
  let count = 0;
  for (let i = 0; i < 3; i++) {
    if (answer[i] !== userNumber[i] && userNumber.includes(answer[i])) count++;
  }
  return count;
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

class App {
  play() {
    let answer = randomNumberSetting();
    gameStartPhrase();
    userInput(answer);
  }
}

module.exports = App;
