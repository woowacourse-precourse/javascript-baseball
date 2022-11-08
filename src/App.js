const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.Randomnum();
  }

  Randomnum() {
    var computernum =[];
    while (computernum.length < 3) {
      let num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computernum.includes(num)) {
        computernum.push(num);
      }
    }
    this.Userinput(computernum);
  }

  Expectcheck(input) {
    if (input.length !== 3) {
      throw new Error("3자리 숫자만 입력 가능합니다.");
    }
    else if (isNaN(input)) {
      throw new Error("숫자만 입력 가능합니다.");
    }
    else if (input.includes(0))
      throw new Error("숫자에 0이 포함될수 없습니다.")
  }

  Userinput(computernum) {
    let inputArr = [];
      MissionUtils.Console.readLine("숫자를 입력해주세요:", (input) => {
        this.Expectcheck(input);
        inputArr = Array.from(input).map(Number);
        const strike = this.countstrike(inputArr, computernum);
        const ball = this.countball(inputArr, computernum);
        if(strike<3)
        {
          this.checkresult(strike, ball);
          this.Userinput(computernum);
        }
        else if(strike===3)
        {
          this.restartgame();
        }
      })
    }

  countstrike(inputArr, computernum) {
    let strike =0;
    for (let order = 0; order < 3; order++) {
      if (inputArr[order] === computernum[order]) {
        strike++;
      }
    }
    return strike;
  }

  countball(inputArr, computernum) {
    let ball =0;
    for (let order = 0; order < 3; order++) {
      if (computernum.includes(inputArr[order]) && inputArr[order] !== computernum[order]) {
        ball++;
      }
    }
    return ball;
  }

  checkresult(strike, ball) {
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print('낫싱');
    }
    else if (strike === 0) {
      MissionUtils.Console.print(`${ball}볼`);
    } 
    else if (ball === 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    }
    else
    {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }

  restartgame() {
    MissionUtils.Console.print("3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    MissionUtils.Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.", (answer) => {
      if (answer === "1") {
          this.play();
      } else if (answer === "2") {
          MissionUtils.Console.close();
      } else {
          throw new Error('입력값이 틀렸습니다');
      }
    })
  }
}
const app = new App();
app.play();
module.exports = App;