const MissionUtils = require("@woowacourse/mission-utils");
const [Console, Random] = [MissionUtils.Console, MissionUtils.Random]

class App {
  constructor() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.playingGame = true;
  }

  play() {
    const randNum = this.setRandNum();
    while (this.playingGame) {
      this.userInput(randNum);
    }
  }

  setRandNum() {
    const randNum = [];
    while (randNum.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!randNum.includes(number)) {
        randNum.push(number);
      }
    }
    return randNum;
  }

  userInput(randNum) {
    Console.readLine("숫자를 입력해주세요", (answer) => {
      const userGuess = this.checkValid(answer);
      Console.print(`숫자를 입력해주세요 : ${answer}`);
      const { ball, strike } = this.countResult(randNum, userGuess);
      this.printResult(ball, strike);
    });
  }

  checkValid(userGuess) {
    let notNumFlag = false;
    let numChar = 0;
    if (userGuess.length !== 3) throw "3자리 숫자를 입력하세요.";
    for (let i = 0; i < userGuess.length; i++) {
      if (userGuess[i] === userGuess[i+1] || userGuess[i] === userGuess[i+2]) {
        throw "중복 숫자 없게 입력하세요.";
      }
      numChar = Number(userGuess[i]);
      if (numChar >= 48 && numChar <= 57) notNumFlag = true;
    }
    if (Number.isNaN(Number(userGuess))) notNumFlag = true;
    if (notNumFlag) throw "1부터 9까지 숫자만 입력하세요.";
    return userGuess;
  }

  countResult(randNum, userNum) {
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < randNum.length; i++) {
      let index = userNum.indexOf(randNum[i]);
      if (index !== -1 && index === i) {
        strike++;
      } else if (index !== -1 && index !== i) {
        ball++;
      }
    }
    return { ball, strike };
  }

  printResult(ball, strike) {
    if (strike === 3) {
      Console.print("3스트라이크");
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.askRestart();
      } else if (ball > 0 && strike > 0) {
        Console.print(`${ball}볼 ${strike}스트라이크`);
      } else if (ball > 0 && strike === 0) {
        Console.print(`${ball}볼`);
      } else if (ball === 0 && strike > 0) {
        Console.print(`${strike}스트라이크`);
      } else {
        Console.print(`낫싱`);
      }
  }

  askRestart() {
    Console.print(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요."
    );
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (answer) => {
        if (String(answer) === "1") {
          Console.print("1");
          this.play();
        } else if (String(answer) === "2") {
          Console.print("게임 종료");
          Console.close();
          this.playingGame = false;
        } 
      }
    );
  }
}

module.exports = App;