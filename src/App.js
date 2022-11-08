const MissionUtils = require('@woowacourse/mission-utils');
const Validate = require('./Validate.js')

class App {
  constructor() {
    this.user = new Validate;
  }
  
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.makeComputerNum();
  }

  makeComputerNum() {
    const random_num = [];
    while(random_num.length < 3) {
        const number = MissionUtils.Random.pickNumberInRange(1,9);
        if(random_num.includes(number)) continue;
        random_num.push(number);        
    }
    const computerNum = random_num.join('');
    this.getUserNum(computerNum);
  }

  getUserNum(computerNum) {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (userNum) => {
      const isValid = this.user.isValid(userNum);
      if (!isValid) {
        throw new Error("입력값이 잘못되었습니다. 프로그램을 종료합니다.");
      }
      this.compareNum(computerNum, userNum);
    });
  }

  compareNum(computerNum, userNum) {
    const {strike, ball} = this.cntStikeAndBall(computerNum, userNum);
    const result = this.resultMsg(strike, ball);
    MissionUtils.Console.print(result);

    if (strike === 3){
      this.successMsg();
      this.askReplay();
    }
    if (strike !== 3) {
      this.getUserNum(computerNum);
    }
  }

  successMsg() {
    MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
  }

  exitGame() {
    MissionUtils.Console.print("게임을 종료합니다.");
    MissionUtils.Console.close();
  }

  askReplay() {
  MissionUtils.Console.print("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
  MissionUtils.Console.readLine("", (isRestart) => {
    if (isRestart === "1"){
      return this.play();
    }
    if (isRestart === "2") {
      return this.exitGame();
    }
    else {
      throw new Error("입력값이 잘못되었습니다. 프로그램을 종료합니다.");
    }
  });
}

  cntStikeAndBall(computerNum, userNum) {
    let strike = 0, ball = 0;
    const computerArray = [...computerNum];
    const userArray = [...userNum];

    computerArray.forEach((num, idx) => {
      if (idx === userArray.indexOf(num)) {
        strike += 1;
      } else if (userArray.includes(num)) {
        ball += 1;
      }
    });
    return {strike, ball};
  }

  resultMsg(strike, ball) {
    let msg = '';
    if (strike === 0 && ball === 0) {
      return msg = '낫싱';
    }
    if (strike === 0) {
      return msg += `${ball}볼`;
    }
    if (ball === 0) {
      return msg += `${strike}스트라이크`;
    }
    else {
      return msg = `${ball}볼 ${strike}스트라이크`;
    }
  }

}

module.exports = App;