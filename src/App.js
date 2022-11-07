const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.isContinued = true;
    this.computer = [];
    this.user = [];
    this.score = {
      ball: 0,
      strike: 0,
    };
  }

  checkDistinct(input) {
    const arr = input.split('');
    const set = new Set(arr);

    return arr.length === set.size;
  }

  setComputerNumber() {
    while (this.computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.computer.includes(number)) this.computer.push(number);
    }
  }

  inputUserNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      const inputStr = String(input);
      if (!/^[1-9]{3}$/.test(inputStr)) throw `1에서 9까지 3자리만 입력하세요`;
      if (!this.checkDistinct(input)) throw '각 자릿수는 서로 달라야 합니다';
      this.user = inputStr.split('').map((num) => Number(num));
    });
    MissionUtils.Console.close();

    return this;
  }

  calcScore() {
    this.user.forEach((digit, idx) => {
      if (digit === this.computer[idx]) this.score.strike += 1;
      else if (this.computer.includes(digit)) this.score.ball += 1;
    });

    return this;
  }

  printResult() {
    let resultStr = '';
    if (this.score.ball > 0) {
      resultStr += `${this.score.ball}볼`;
    }

    if (this.score.strike > 0) {
      resultStr += resultStr && ' ';
      resultStr += `${this.score.strike}스트라이크`;
    }

    if (this.score.strike === 0 && this.score.ball === 0) {
      resultStr = '낫싱';
    }

    MissionUtils.Console.print(resultStr);

    if (this.score.strike === 3) {
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      this.setIsContinued();
    }

    return this;
  }

  setIsContinued() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (input) => {
        if (!/[12]{1}/.test(input)) throw '1 또는 2만 입력 가능합니다';
        this.isContinued = input === '1';
        this.computer = [];
      }
    );
  }

  initializeScore() {
    this.user = [];
    this.score.ball = 0;
    this.score.strike = 0;
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    while (this.isContinued) {
      if (this.computer.length === 0) this.setComputerNumber();
      this.inputUserNumber().calcScore().printResult().initializeScore();
    }

    MissionUtils.Console.close();
  }
}

module.exports = App;
