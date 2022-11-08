const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  play() {
    // 컴퓨터 랜덤 값 생성
    this.computerRandomValue = RandomChoice();
    // 사용자 값 입력
    this.userInput();
  }
  userInput() {
    let userInputValue;
    const validation = new Validation();
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (value) => {
      userInputValue = value.split("").map((number) => +number);
      validation.checkUserInput(value);
      const resultCount = getCount(userInputValue, this.computerRandomValue);
      getResult(resultCount);
      console.log(userInputValue);
      if (resultCount.strike !== 3) {
        return this.userInput();
      }
      this.gameClear();
    });
  }
  gameClear() {
    const validation = new Validation();
    MissionUtils.Console.readLine(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (value) => {
        validation.checkUserEndInput(value);
        console.log(value);
        if (+value === 1) {
          this.play();
        }
        if (+value === 2) {
          MissionUtils.Console.print("게임 종료");
          MissionUtils.Console.close();
        }
      }
    );
  }
}
// 예외처리 클래스
class Validation {
  checkUserInput(value) {
    const checkDeplicated = [...new Set(value)];
    if (value.length !== 3) throw new Error("3글자여야 합니다.");
    if (!value.match(/[1-9]/)) {
      throw new Error("1에서 9짜리의 숫자만 입력해주세요.");
    }
    if (checkDeplicated.length !== 3) {
      throw new Error("중복되지 않는 값을 입력해주세요.");
    }
  }
  checkUserEndInput(value) {
    if (![1, 2].includes(+value))
      throw new Error("1과 2만 입력할 수 있습니다.");
  }
}

function RandomChoice() {
  let randomSet = new Set();
  addNumber(randomSet);
  return [...randomSet];
}

function addNumber(randomSet) {
  const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
  randomSet.add(randomNumber);
  if (randomSet.size < 3) addNumber(randomSet);
}

function getCount(userInputValue, computerRandomValue) {
  const result = {
    strike: 0,
    ball: 0,
  };
  userInputValue.forEach((userElement, index) => {
    const computerElement = computerRandomValue[index];
    if (computerElement === userElement) {
      return result.strike++;
    }
    if (computerRandomValue.includes(userElement)) {
      return result.ball++;
    }
  });
  return result;
}

function getResult(result) {
  let resultMessage = "";

  if (resultMessage === "") {
    resultMessage = "낫싱";
  }
  if (result.ball) {
    resultMessage += `${result.ball}볼`;
  }
  if (result.strike) {
    resultMessage += ` ${result.strike}스트라이크`;
  }
  MissionUtils.Console.print(resultMessage);
}

module.exports = App;
