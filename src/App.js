const MissionUtils = require("@woowacourse/mission-utils");
const config = require("./config/config");

class App {
  constructor() {
    this.computerNum = [];
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.\n");
    this.start();
  }

  start() {
    this.generateNum(config.GAME_NUM_SIZE);
    this.round();
  }

  round() {
    const userNum = this.readNum();
    // console.log("userNum", userNum);
    const scoreObject = this.compareNum(this.computerNum, userNum);
    this.printScore(scoreObject);

    if (scoreObject.strike === config.GAME_NUM_SIZE) {
      this.win();
    } else {
      this.round();
    }
  }

  win() {
    MissionUtils.Console.print(
      `${config.GAME_NUM_SIZE}개의 숫자를 모두 맞히셨습니다! 게임 종료\n`
    );
    this.replay();
  }

  generateNum() {
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
    this.computerNum = result;
  }

  compareNum(computer, user) {
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
    MissionUtils.Console.print(resultMessage + "\n");
  }

  readNum() {
    let answerList = [];
    let inputList = [];
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      inputList = Array.from(input);
      inputList.map((number) => {
        answerList.push(parseInt(number));
      });
    });
    this.isValidNum(answerList);
    return answerList;
  }

  replay() {
    let answer = -1;
    MissionUtils.Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => {
        answer = parseInt(input);
        this.isValidControl(answer);
        if (answer !== 1) {
          MissionUtils.Console.close();
        } else {
          this.start();
        }
      }
    );
    return answer;
  }

  isValidNum(inputList) {
    if (inputList.length !== config.GAME_NUM_SIZE) {
      throw "숫자가 유효하지 않습니다.";
    }
    const result = inputList.filter(
      (input) => input >= config.START_GAME_NUM && input <= config.END_GAME_NUM
    );
    if (result.length !== inputList.length) {
      throw "숫자가 유효하지 않습니다.";
    }

    if (new Set(inputList).size !== inputList.length) {
      throw "숫자가 유효하지 않습니다.";
    }
  }

  isValidControl(input) {
    if (input !== 1 && input !== 2) {
      throw "입력값이 유효하지 않습니다.";
    }
  }
}

module.exports = App;
