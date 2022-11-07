const MISSION_UTILS = require('@woowacourse/mission-utils');

const TRUE = true;
const RE_DO = '2';
const DONE = '1';

class App {
  play() {
    MISSION_UTILS.Console.print('숫자 게임을 시작 합니다');
    while (TRUE) {
      this.buildAnswer();
      let strike = 0;
      while (strike !== 3) {
        let input;
        MISSION_UTILS.Console.readLine(
          '숫자를 입력해주세요 : ',
          (_input) => {
            input = _input;
          },
        );
        MISSION_UTILS.Console.close();
        this.choiceAnswer(input);
        this.countStrike();
        strike = this.strike;

        this.countBall();

        this.printHint();
      }
      MISSION_UTILS.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');

      let select;
      MISSION_UTILS.Console.readLine(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
        (start) => {
          select = start;
        },
      );
      MISSION_UTILS.Console.close();
      if (select === RE_DO) {
        break;
      }
      if (select !== DONE) {
        throw new Error('1 이나 2 중에 선택하지 않음');
      }
    }
  }

  // build_answer
  buildAnswer() {
    const ANSWER = [];

    let randomNumber = 0;

    for (let i = 0; i < 3; i += 1) {
      do {
        randomNumber = MISSION_UTILS.Random.pickNumberInRange(0, 9);
      } while (ANSWER.includes(randomNumber));
      ANSWER.push(randomNumber);
      // 첫 숫자가 0인경우 재생성
      if (i === 0 && randomNumber === 0) {
        ANSWER.pop();
        i -= 1;
      }
    }
    this.answer = ANSWER;
    return ANSWER;
  }

  choiceAnswer(userNums) {
    // 숫자이어야함
    if (Number.isNaN(Number(userNums))) {
      throw new Error('userNums가 정수가 아님');
    }
    // 3자리어야함
    if (userNums.length !== 3) {
      throw new Error('userNums가 세자리가 아님');
    }
    const USER_SELECT = [...userNums].map(Number);

    // 중복없어야함
    const LENGTH_TEST = [...new Set(USER_SELECT)];
    if (LENGTH_TEST.length < 3) {
      throw new Error('중복 숫자가 존재합니다.');
    }

    this.userSelect = USER_SELECT;

    return USER_SELECT;
  }

  countStrike() {
    let strike = 0;
    for (let i = 0; i < 3; i += 1) {
      if (this.answer[i] === this.userSelect[i]) {
        strike += 1;
      }
    }

    this.strike = strike;
    return strike;
  }

  countBall() {
    let ball = 0;
    for (let i = 0; i < 3; i += 1) {
      const INDEX = this.userSelect.indexOf(this.answer[i]);
      if (INDEX !== -1 && INDEX !== i) {
        ball += 1;
      }
    }
    this.ball = ball;
    return ball;
  }

  printHint() {
    const MESSAGE = [];
    if (this.ball >= 1) {
      MESSAGE.push(`${this.ball}볼`);
    }
    if (this.strike >= 1) {
      MESSAGE.push(`${this.strike}스트라이크`);
    }
    if (MESSAGE.length === 0) {
      MESSAGE.push('낫싱');
    }

    MISSION_UTILS.Console.print(MESSAGE.join(' '));
  }
}

module.exports = App;
