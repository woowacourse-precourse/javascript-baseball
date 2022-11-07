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
      let [strike, ball] = this.checkStrikeAndBall(inputNum);
      this.printStrikeAndBall(strike, ball);
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

  checkStrikeAndBall(inputNum) {
    let [strike, ball] = [0, 0];
    let splitInputNum = [...inputNum];
    splitInputNum.forEach((number, index) => {
      let computerIndex = this.computer.indexOf(Number(number));
      if (computerIndex === index) strike++;
      else if (computerIndex !== -1) ball++;
    });
    return [strike, ball];
  }

  printStrikeAndBall(strike, ball) {
    if (strike === 0 && ball === 0) MissionUtils.Console.print('낫싱');
    else if (strike === 3) MissionUtils.Console.print('${strike}스트라이크');
    else if (strike > 0 && ball === 0)
      MissionUtils.Console.print('${strike}스트라이크');
    else if (strike === 0 && ball > 0)
      MissionUtils.Console.print('${strike}스트라이크');
    else MissionUtils.Console.print('${ball}볼 ${strike}스트라이크');
  }

  play() {
    this.playBall();
  }
}

module.exports = App;
