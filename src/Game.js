const { Random, Console } = require('@woowacourse/mission-utils');

class Game {
  setAnswer() {
    let answer = [];

    while (answer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);

      if (!answer.includes(number)) {
        answer.push(number);
      }
    }
    this.answer = answer;
  }

  setCount(userInput) {
    const { answer } = this;
    let count = {
      ball: 0,
      strike: 0,
    };

    userInput.forEach((number, index) => {
      const findIndex = answer.findIndex((element) => element === number);

      if (findIndex === index) {
        count.strike += 1;
      } else if (findIndex !== -1) {
        count.ball += 1;
      }
    });
    this.count = count;
  }

  setHint() {
    const { count } = this;
    let hint = '';

    if (count.ball > 0) {
      hint = `${count.ball}볼`;
    }
    if (count.strike > 0) {
      hint += ` ${count.strike}스트라이크`;
    }
    if (hint === '') {
      hint = '낫싱';
    }
    this.hint = hint.trimStart();
  }

  readState() {
    return new Promise((resolve) => {
      Console.readLine(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
        (string) => {
          this.state = Number(string);
          this.checkState();
          resolve();
        }
      );
    });
  }

  checkState() {
    const { state } = this;

    if (state !== 1 && state !== 2) {
      throw new Error('잘못된 값을 입력하셨습니다.');
    }
  }
}

module.exports = Game;
