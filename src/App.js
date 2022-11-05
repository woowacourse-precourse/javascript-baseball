const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.input;
    this.answer;
    this.hint = {
      ball: 0,
      strike: 0,
      nothing: 0,
    };
  }

  setInput(input) {
    input = Array.from(input.split(''), (num) => parseInt(num));

    if (App.isValidInput(input)) {
      this.input = input;
    }

    this.setHint();
  }

  setAnswer() {
    this.answer = [];

    while (this.answer.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (this.answers === undefined || !this.answers.includes(number)) {
        this.answer.push(number);
      }
    }
  }

  setHint() {
    this.resetHint();

    this.input.forEach((digitNumber, index) => {
      if (this.answer[index] === digitNumber) this.hint.strike += 1;
      if (
        this.answer.includes(digitNumber) &&
        this.answer[index] !== digitNumber
      )
        this.hint.ball += 1;
      if (!this.answer.includes(digitNumber)) this.hint.nothing += 1;
    });

    this.printHint();
    this.receiveInputFromConsole();
  }

  resetHint() {
    for (const key in this.hint) {
      this.hint[key] = 0;
    }
  }

  receiveInputFromConsole() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.setInput(input);
    });
  }

  success() {
    App.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.receive1Or2FromConsole();
  }

  receive1Or2FromConsole() {
    MissionUtils.Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (selectedNumByUser) => {
        this.selectReplayOrClose(selectedNumByUser);
      }
    );
  }

  selectReplayOrClose(selectedNum) {
    if (selectedNum === '1') return this.setAnswerAndreceiveInput();
    if (selectedNum === '2') return App.close();

    throw '1 또는 2만 입력해주세요.';
  }

  printHint() {
    if (this.hint.strike === 3) {
      App.print('3스트라이크');
      return this.success();
    }
    if (this.hint.nothing === 3) return App.print('낫싱');
    if (this.hint.strike === 0) return App.print(`${this.hint.ball}볼`);
    if (this.hint.ball === 0) return App.print(`${this.hint.strike}스트라이크`);

    return App.print(`${this.hint.ball}볼 ${this.hint.strike}스트라이크`);
  }

  setAnswerAndreceiveInput() {
    this.setAnswer();
    this.receiveInputFromConsole();
  }

  play() {
    App.print('숫자 야구 게임을 시작합니다.');
    this.setAnswerAndreceiveInput();
  }

  static print(message) {
    MissionUtils.Console.print(message);
  }

  static close() {
    MissionUtils.Console.close();
  }

  static isValidInput(input) {
    if (input.includes(NaN)) throw '문자를 제외한 숫자만 입력하세요.';
    if (input.includes(0)) throw '1~9 사이의 숫자만 입력하세요.';
    if (input.length !== 3) throw '3개의 숫자만 입력하세요.';
    if (input.length !== new Set(input).size)
      throw '서로 다른 숫자를 입력하세요.';

    return true;
  }
}

const app = new App();
app.play();

module.exports = App;
