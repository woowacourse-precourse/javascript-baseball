const MissionUtils = require('@woowacourse/mission-utils');
class App {
  playBall() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.computer = this.randomNum();
    this.input();
  }

  randomNum() {
    let randomNum = [];
    while (randomNum.length != 3) {
      let pickNum = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomNum.includes(pickNum)) {
        randomNum.push(pickNum);
      }
    }
    return randomNum;
  }

  input() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (inputNum) => {
      this.checkInputNum(inputNum);
    });
  }

  checkInputNum(inputNum) {
    let duplicate =
      inputNum[0] === inputNum[1] ||
      inputNum[0] === inputNum[2] ||
      inputNum[1] === inputNum[2];

    if (Number.isNaN(inputNum) || inputNum.length !== 3 || duplicate) {
      throw new Error('잘못된 입력값입니다.');
    }
  }

  play() {
    this.playBall();
  }
}

module.exports = App;
