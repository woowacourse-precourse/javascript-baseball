const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.randomList = this.makeRandomNumber();
  }

  play() {
    this.gameStartMsg();
    this.gameCourse();
  }

  gameCourse() {
    this.getUserNumber();
    this.strike = this.gameResultCount(this.answerNum, this.randomList).strike;
    this.ball = this.gameResultCount(this.answerNum, this.randomList).ball;
    this.printGameMessage(this.strike, this.ball);
    this.checkGameResult(this.printGameMessage(this.strike, this.ball));
  }

  gameStartMsg() {
    console.log("숫자 야구 게임을 시작합니다.");
  }

  makeRandomNumber() {
    const randomArr = [];
    while (randomArr.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomArr.includes(number)) {
        randomArr.push(number);
      }
    }
    return randomArr;
  }

  getUserNumber() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.exceptionAnwser(answer);
      this.answerNum = answer;
      MissionUtils.Console.print(`숫자를 입력해주세요 : ${this.answerNum}`);
    });
  }

  exceptionAnwser(answer) {
    const userNumber = String(answer).split('').map(Number);

    if (userNumber.length !== 3) throw new Error('세자리 숫자만 입력해주세요.');

    const checkDuplication = new Set(userNumber);
    if (userNumber.length !== checkDuplication.size) throw new Error('중복된 숫자가 있습니다.');

    for (let strNum = 0; strNum < userNumber.length; strNum++) {
      if (Number(userNumber[strNum]) === 0) throw new Error('1~9 범위의 숫자만 입력해주세요.');
    }

    return answer;
  }

  gameResultCount(answer, random) {
    const userNumber = String(answer).split('').map(Number);
    const result = {
      strike: 0,
      ball: 0,
    };

    for (let num = 0; num < 3; num++) {
      let index = userNumber.indexOf(random[num]);
      if (index > -1) {
        if (index === num) {
          result.strike += 1;
        } else {
          result.ball += 1;
        }
      }
    }

    return result;
  }

  printGameMessage(strike, ball) {
    let text = '';
    if (strike === 0 && ball === 0) {
      text = '낫싱';
    } else if (strike === 0 && ball !== 0) {
      text = `${ball}볼`;
    } else if (strike !== 0 && ball === 0) {
      text = `${strike}스트라이크`;
    } else {
      text = `${ball}볼 ${strike}스트라이크`;
    }
    return text;
  }
  checkGameResult(result) {
    if (result === '3스트라이크') {
      this.printWinMessage(result);
    } else {
      this.printMessage(result);
    }
  }

  printWinMessage(result) {
    MissionUtils.Console.print(result);
  }

  printMessage(result) {
    MissionUtils.Console.print(result);
  }


}

module.exports = App;
