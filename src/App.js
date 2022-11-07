const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    this.computerNum = [];
    this.threeStrike = false;
  }

  setComputerNum() {
    while (this.computerNum.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!this.computerNum.includes(number)) {
      this.computerNum.push(number);
      }
    }
  }
  
  ballCounting(input) {
    let count = 0;
    
    for (let i = 0; i < 3; i++) {
      let found = this.computerNum.indexOf(parseInt(input[i]));
      if (found != -1 && found != i) {
        count++;
      }
    }
    return count;
  }
  
  strikeCounting(input) {
    let count = 0;
    
    for (let i = 0; i < 3; i++) {
      let found = this.computerNum.indexOf(parseInt(input[i]));
      if (found != -1 && found == i) {
        count++;
      }
    }
    return count;  
  }
  
  printCount(ball, strike) {
    if (ball > 0 && strike > 0) {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      return ;
    }
    if (ball > 0) {
      MissionUtils.Console.print(`${ball}볼`);
    }
    if (strike > 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    }
    if (strike == 3) {
      MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    }
    if (ball == 0 && strike == 0) {
      MissionUtils.Console.print("낫싱");
    }
  }

  checkAndPrintCount(input) {
    let ball = this.ballCounting(input);
    let strike = this.strikeCounting(input);

    if (strike == 3) {
      this.threeStrike = true;
    }
    this.printCount(ball, strike);
  }

  checkInputValid(input) {
    const numbers = /[1-9]{3}/;
    if (!numbers.test(input)) {
      throw "ERROR: Invalid input \n[ Valid Input : three digit number from 1 to 9 ]";
    }
    if (input.length != 3) {
      throw "ERROR: Invalid length \n[ Valid Input : three digit number from 1 to 9 ]";
    }
    const dupleCheck = new Set(input);
    if (dupleCheck.size != 3) {
      throw "ERROR: Duplicated numbers \n[ Valid Input : three digit number from 1 to 9 ]";
    }

    return true;
  }

  inGame() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.checkInputValid(input);

      this.checkAndPrintCount(input);
      if (this.threeStrike) {
        this.endOrReplay();
      }
      this.inGame();
    });
  }

  endOrReplay() {
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (input) => {
      if (input != 1 && input != 2) {
        throw "ERROR: Invalid input\n [ Valid Input : 1 or 2 ]";
      }

      if (input == 1) {
        this.computerNum.length = 0;
        this.threeStrike = false;
        this.newGame();
      }
      if (input == 2) {
        MissionUtils.Console.close();
      }
    });
  }

  newGame() {
    try {
      this.setComputerNum();
      this.inGame();
    } catch(e) {
      console.error(e);
    }
  }

  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.newGame();
  }
}

// module.exports = App;

  const app = new App();
  app.play();
//TODO this 바인딩 공부