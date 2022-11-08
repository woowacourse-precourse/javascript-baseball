const { Console, Random } = require("@woowacourse/mission-utils/");
const NUMBER_LENGTH = 3;

class App {
  
  constructor() {
    this.isPlayingNow = false;
    this.computerNumberList = [];
    this.playerNumberList = [];
    this.roundResult = { "ball" : 0, "strike" :  0 };
  }

  getComputerNumberList() {
    const pickedRandomNumberSet = new Set();
    while(pickedRandomNumberSet.size < NUMBER_LENGTH) {
      pickedRandomNumberSet.add(Random.pickNumberInRange(1, 9));
    }
    this.computerNumberList = [...pickedRandomNumberSet];
  }

  getPlayerNumberList() {
    Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      if (this.isValidRandomNumberList(answer)) {
        this.playerNumberList = answer;
        this.comparePlayerNumberWithComputerNumber();
      } else {
        throw new Error("입력한 숫자가 유효하지 않습니다.");
      }
    });
  }

  isValidRandomNumberList(numberList) {
    var regex = new RegExp(`^\\d{${NUMBER_LENGTH}}$`);
    return regex.test(String(numberList)) && !(/([0-9])\1/).test(String(numberList));
  }

  comparePlayerNumberWithComputerNumber() {
    this.roundResult['ball'] = this.countBall();
    this.roundResult['strike'] = this.countStrike();
  }

  countBall() {
    let ball = 0;
    for(let idx = 0; idx < NUMBER_LENGTH; idx++) {
      if (
        this.playerNumberList[idx] != this.computerNumberList[idx] 
        && this.computerNumberList.includes(Number(this.playerNumberList[idx]))
      ) {
        ball++;
      }
    }
    return ball;
  }

  countStrike() {
    let strike = 0;
    for(let idx = 0; idx < NUMBER_LENGTH; idx++) {
      if (this.playerNumberList[idx] == this.computerNumberList[idx]) {
        strike++;
      }
    }
    return strike;
  }

  roundStart() {
    if (!this.isPlayingNow) {
      this.isPlayingNow = true;
      Console.print("숫자 야구 게임을 시작합니다.");
      this.getComputerNumberList();
    }
    this.getPlayerNumberList();
  }
  
  play() {
    this.roundStart();
  }

}

module.exports = App;
