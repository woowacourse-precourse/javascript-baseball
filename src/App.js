const MissionUtils = require('@woowacourse/mission-utils');
class App {
  playBall() {
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
      this.checkError(inputNum);
      let [strike, ball] = this.checkStrikeAndBall(inputNum);
      this.printStrikeAndBall(strike, ball);
    });
  }

  checkError(inputNum) {
    let duplicate =
      inputNum[0] === inputNum[1] ||
      inputNum[0] === inputNum[2] ||
      inputNum[1] === inputNum[2];

    if (Number.isNaN(inputNum)) throw new Error('잘못된 입력 값입니다.');
    else if (inputNum.length !== 3) throw new Error('3자리 수가 아닙니다.');
    else if (duplicate) throw new Error('중복된 숫자가 존재합니다.');
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
    if (strike === 0 && ball === 0) {
      MissionUtils.Console.print('낫싱');
      this.input();
    } else if (strike === 3) {
      MissionUtils.Console.print(strike + '스트라이크');
      this.input();
    } else if (strike > 0 && ball === 0) {
      MissionUtils.Console.print(strike + '스트라이크');
      this.input();
    } else if (strike === 0 && ball > 0) {
      MissionUtils.Console.print(strike + '스트라이크');
      this.input();
    } else {
      MissionUtils.Console.print(ball + '볼 ' + strike + '스트라이크');
      this.input();
    }
  }

  result() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (restartNum) => {
        if (Number(restartNum) === 1) this.playBall();
        else if (Number(restartNum) === 2) MissionUtils.Console.close();
        else throw new Error('잘못된 입력 값입니다.');
      }
    );
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.playBall();
  }
}

module.exports = App;
