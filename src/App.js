
const MissionUtils = require("@woowacourse/mission-utils");




// 1. 컴퓨터의 수 3자리 구하기.
let machineNum = [];
while (machineNum.length < 3) {
  let number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!machineNum.includes(number)) {
    machineNum.push(number);
  }
}

class App {
  constructor(arr) {
    this.arr = arr;
    this.inputNum = [];
    this.checkBallArray = [];
    this.strike = 0;
    this.ball = 0;
  }
  get arr() {
    return this._arr
  }
  set arr(value) {
    this._arr = value
  }
  // 3. 3. 컴퓨터와 플레이어의 값을 비교해 스트라이크,볼의 값을 구함.
  // strike 갯수 확인 함수
  checkStrike(_arr) {
    for (let j = 0; j < _arr.length; j++) {
      if (_arr[j] !== this.inputNum[j]) {
        this.checkBallArray.push(this.inputNum[j]);
      } else {
        this.strike += 1;
      }
    }
    return this.strike
  }
  // 볼 갯수 확인 함수
  checkball(_arr) {
    for (let i = 0; i < this.checkBallArray.length; i++) {
      if (_arr.includes(this.checkBallArray[i])) {
        this.ball += 1
      }
    }
    return this.ball
  }
  // 새 게임을 시작할 때 변수 값들 초기화 함수.
  reSet() {
    this.ball = 0;
    this.strike = 0;
    this.checkBallArray.length = 0;
    this.inputNum.length = 0;
  }

  // 게임 재시작 함수(컴퓨터 입력값 초기화)
  //  4. 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있다.
  rePlay() {
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (answer) => {
      if (answer === '1') {
        machineNum.length = 0;
        while (machineNum.length < 3) {
          let number = MissionUtils.Random.pickNumberInRange(1, 9);
          if (!machineNum.includes(number)) {
            machineNum.push(number);
          }
        }
        this.newplay();
      } else {
        MissionUtils.Console.close();
      }
    });
  }
  //게임을 시작합니다를 프린트 하지 않기위한 play 함수
  newplay() {
    // 2. 게임 플레이어는 컴퓨터가 생각하고 있는 서로 다른 3개의 숫자를 입력
    MissionUtils.Console.readLine('서로 다른 숫자를 3개 입력하시오.', (answer) => {
      const num = answer;
      for (let i = 0; this.inputNum.length < 3; i++) {
        this.inputNum.push(parseInt(num[i]));
      }
      const strike = this.checkStrike(this._arr);
      const ball = this.checkball(this._arr);
      if (strike === 3) {
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.reSet();
        this.rePlay();
      } else if (strike > 0 && ball === 0) {
        MissionUtils.Console.print(strike + '스트라이크');
        this.reSet();
        this.newplay();
      } else if (ball > 0 && strike === 0) {
        MissionUtils.Console.print(ball + '볼');
        this.reSet();
        this.newplay();
      } else if (strike === 0 && ball === 0) {
        MissionUtils.Console.print('낫싱');
        this.reSet();
        this.newplay();
      } else {
        MissionUtils.Console.print(strike + '스트라이크' + ball + '볼');
        this.reSet();
        this.newplay();
      }
    });
  }

  play() {
    // 2. 게임 플레이어는 컴퓨터가 생각하고 있는 서로 다른 3개의 숫자를 입력
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.")
    this.newplay();
  }
}

const app = new App(machineNum);

app.play();

module.exports = App;