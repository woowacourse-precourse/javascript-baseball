const MissionUtils = require('@woowacourse/mission-utils');

const GAME_START_MSG = '숫자 야구 게임을 시작합니다.';
const NUM_INPUT_MSG = '숫자를 입력해주세요 : ';
const INPUT_EXCEPTION_MSG = '입력 값 에러 !!!';
const GAME_END_MSG = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
const GAME_RESTART_MSG =
  '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';

class App {
  play() {
    MissionUtils.Console.print(GAME_START_MSG);
    this.getPlayerInput();
  }

  hasNonNumber(str) {
    return (
      str.charCodeAt(0) < '0'.charCodeAt(0) ||
      str.charCodeAt(0) > '9'.charCodeAt(0) ||
      str.charCodeAt(1) < '0'.charCodeAt(0) ||
      str.charCodeAt(1) > '9'.charCodeAt(0) ||
      str.charCodeAt(2) < '0'.charCodeAt(0) ||
      str.charCodeAt(2) > '9'.charCodeAt(0)
    );
  }

  hasDuplicatedNumber(str) {
    return (
      str.charAt(0) === str.charAt(1) ||
      str.charAt(0) === str.charAt(2) ||
      str.charAt(1) === str.charAt(2)
    );
  }

  NumInputExceptionCheck(input) {
    if (
      input.length !== 3 ||
      this.hasNonNumber(input) ||
      this.hasDuplicatedNumber(input)
    )
      throw new Error(INPUT_EXCEPTION_MSG);
  }

  getPlayerInput() {
    MissionUtils.Console.readLine(NUM_INPUT_MSG, (line) => {
      this.NumInputExceptionCheck(line);
      this.input = line.split('');
      this.calScore();
    });
  }

  countBall() {
    if (this.input[0] === this.answer[1] || this.input[0] === this.answer[2])
      this.score.ball += 1;
    if (this.input[1] === this.answer[0] || this.input[1] === this.answer[2])
      this.score.ball += 1;
    if (this.input[2] === this.answer[0] || this.input[2] === this.answer[1])
      this.score.ball += 1;
  }

  countStrike() {
    if (this.input[0] === this.answer[0]) this.score.strike += 1;
    if (this.input[1] === this.answer[1]) this.score.strike += 1;
    if (this.input[2] === this.answer[2]) this.score.strike += 1;
  }

  calScore() {
    this.countBall();
    this.countStrike();
    this.printScore();
  }

  printScore() {
    let scoreMsg = '';
    if (this.score.ball > 0) scoreMsg += `${this.score.ball}볼`;
    if (this.score.strike > 0) {
      if (this.score.ball > 0) scoreMsg += ' ';
      scoreMsg += `${this.score.strike}스트라이크`;
    }
    if (this.score.ball === 0 && this.score.strike === 0) scoreMsg = '낫싱';
    MissionUtils.Console.print(scoreMsg);
    if (this.score.strike === 3) {
      MissionUtils.Console.print(GAME_END_MSG);
      this.gameEndInput();
    } else {
      this.score.ball = 0;
      this.score.strike = 0;
      this.getPlayerInput();
    }
  }

  EndInputExceptionCheck(input) {
    if (
      input.length !== 1 ||
      (input.charAt(0) !== '1' && input.charAt(0) !== '2')
    )
      throw new Error(INPUT_EXCEPTION_MSG);
  }

  gameEndInput() {
    MissionUtils.Console.readLine(GAME_RESTART_MSG, (line) => {
      this.EndInputExceptionCheck(line);
      if (line === '1') {
        this.answer = this.generateAnswer();
        this.score.ball = 0;
        this.score.strike = 0;
        this.getPlayerInput();
      }
      if (line === '2') {
        MissionUtils.Console.close();
      }
    });
  }

  generateAnswer() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer.join('').split('');
  }

  constructor() {
    this.answer = this.generateAnswer();
    this.score = { ball: 0, strike: 0 };
  }
}

module.exports = App;
