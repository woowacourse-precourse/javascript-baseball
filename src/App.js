const MissionUtils = require("@woowacourse/mission-utils");
const config = require("./config/config");

class App {
  constructor() {
    this.computerNumber = [];
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.start();
  }

  start() {
    this.generateNumber(config.GAME_NUM_SIZE);
    this.round();
  }

  round() {
    const userNumber = this.readNumber();
    // console.log("userNumber", userNumber);

    const scoreObject = this.compareNumber(this.computerNumber, userNumber);
    this.printScore(scoreObject);

    if (scoreObject.strike === config.GAME_NUM_SIZE) {
      this.win();
    } else {
      this.round();
    }
  }

  win() {
    MissionUtils.Console.print(
      `${config.GAME_NUM_SIZE}개의 숫자를 모두 맞히셨습니다! 게임 종료`
    );

    const control = this.readControl();

    if (control === 1) {
      this.start();
    }
  }

  generateNumber() {
    const result = [];
    while (result.length < config.GAME_NUM_SIZE) {
      const number = MissionUtils.Random.pickNumberInRange(
        config.START_GAME_NUM,
        config.END_GAME_NUM
      );
      if (!result.includes(number)) {
        result.push(number);
      }
    }
    this.computerNumber = result;
  }

  compareNumber(computer, user) {
    let strike = 0;
    let ball = 0;

    for (let i = 0; i < config.GAME_NUM_SIZE; i++) {
      if (computer[i] === user[i]) {
        strike++;
        ball--;
      }
      if (user.includes(computer[i])) {
        ball++;
      }
    }
    return { strike: strike, ball: ball };
  }

  printScore(scoreObject) {
    let resultMessage = "";

    if (scoreObject.ball) {
      resultMessage += scoreObject.ball + "볼";
    }
    if (scoreObject.strike) {
      resultMessage +=
        (resultMessage && " ") + scoreObject.strike + "스트라이크";
    }
    if (!scoreObject.ball && !scoreObject.strike) {
      resultMessage = "낫싱";
    }
    MissionUtils.Console.print(resultMessage);
  }

  readNumber() {
    let answerList = [];
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      const inputList = Array.from(input);
      inputList.map((number) => {
        answerList.push(parseInt(number));
      });
    });
    this.isValidNumber(answerList);
    return answerList;
  }

  readControl() {
    let answer = -1;
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (input) => {
        answer = parseInt(input);
      }
    );
    this.isValidControl(answer);
    return answer;
  }

  isValidNumber(inputList) {
    if (inputList.length !== config.GAME_NUM_SIZE) {
      throw "숫자가 유효하지 않습니다.";
    }

    const result = inputList.filter(
      (input) => input >= config.START_GAME_NUM && input <= config.END_GAME_NUM
    );
    if (result.length !== inputList.length) {
      throw "숫자 범위가 유효하지 않습니다.";
    }

    if (new Set(inputList).size !== inputList.length) {
      throw "숫자가 유효하지 않습니다.";
    }

    return true;
  }

  isValidControl(input) {
    if (input !== 1 && input !== 2) {
      throw "입력값이 유효하지 않습니다.";
    }
    return true;
  }
}

module.exports = App;
