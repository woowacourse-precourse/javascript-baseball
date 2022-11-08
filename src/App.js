const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  play() {
    const computer = new Computer();
    this.computerRandomValue = computer.RandomChoice();
    this.userInput();
  }
  userInput() {
    let userInputValue;
    const validation = new Validation();
    const count = new ResultCounting();

    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (value) => {
      userInputValue = value.split("").map((number) => +number);
      validation.checkUserInput(value);
      const resultCount = count.getCount(
        userInputValue,
        this.computerRandomValue
      );
      count.getResult(resultCount.strike, resultCount.ball);
      this.checkGameClear(resultCount.strike);
    });
  }
  checkGameClear(strikeCount) {
    const gameResult = new GameResult();
    if (strikeCount !== 3) return this.userInput();
    gameResult.gameClearMessage();
  }
}

// 컴퓨터 랜덤 값 생성 클래스
class Computer {
  RandomChoice() {
    let randomSet = new Set();
    this.addNumber(randomSet);
    return [...randomSet];
  }
  addNumber(randomSet) {
    const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
    randomSet.add(randomNumber);
    if (randomSet.size < 3) this.addNumber(randomSet);
  }
}

// 예외처리 클래스
class Validation {
  checkUserInput(value) {
    const checkDeplicated = [...new Set(value)];
    if (value.length !== 3) throw new Error("3글자여야 합니다.");
    if (!value.match(/[1-9]/))
      throw new Error("1에서 9짜리의 숫자만 입력해주세요.");
    if (checkDeplicated.length !== 3)
      throw new Error("중복되지 않는 값을 입력해주세요.");
  }
  checkUserEndInput(value) {
    if (![1, 2].includes(+value))
      throw new Error("1과 2만 입력할 수 있습니다.");
  }
}

// 스트라이크, 볼 카운팅 클래스
class ResultCounting {
  getCount(userInputValue, computerRandomValue) {
    const result = {
      strike: 0,
      ball: 0,
    };
    userInputValue.forEach((userElement, index) => {
      const computerElement = computerRandomValue[index];
      if (computerElement === userElement) return result.strike++;
      if (computerRandomValue.includes(userElement)) return result.ball++;
    });
    return result;
  }
  getResult(strike, ball) {
    let resultMessage = "";
    if (ball) resultMessage += `${ball}볼`;
    if (strike) resultMessage += ` ${strike}스트라이크`;
    if (resultMessage === "") resultMessage = "낫싱";
    MissionUtils.Console.print(resultMessage);
  }
}

// 게임 결과 처리 클래스
class GameResult {
  gameClearMessage() {
    const validation = new Validation();
    MissionUtils.Console.readLine(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (value) => {
        validation.checkUserEndInput(value);
        this.askRestart(value);
      }
    );
  }
  askRestart(value) {
    if (+value === 1) app.play();
    if (+value === 2) {
      MissionUtils.Console.print("게임 종료");
      MissionUtils.Console.close();
    }
  }
}

const app = new App();
module.exports = App;
