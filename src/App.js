const { Random, Console } = require('@woowacourse/mission-utils');

const INVALID_INPUT_ERR = 'invalid input error';
const SPACE_BAR = ' ';
const EMPTY = '';
const HINT_MSG = {
  nothing: '낫싱',
  end: '3스트라이크',
};
const HINT_UNITS = ['ball', 'strike'];
const HINT_UNITS_OBJ = {
  ball: '볼',
  strike: '스트라이크',
};

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.startGame();
  }

  startGame() {
    this.initAnswer();
    this.getUserInput(this.validate);
  }

  initAnswer() {
    this.answer = this._getRandomsStr([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
  }

  _getRandomsStr(numbers, size) {
    const pickNums = [];

    while (pickNums.length < size) {
      const pickNum = Random.pickNumberInList(numbers);
      numbers.splice(numbers.indexOf(pickNum), 1);
      pickNums.push(pickNum);
    }

    return pickNums.join('');
  }

  getUserInput(cbFn) {
    Console.readLine('숫자를 입력해주세요 : ', cbFn.bind(this));
  }

  terminate() {
    // 게임을 종료 메시지를 발생시킨다.
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (answer) => {
      if (answer === '1') {
        return this.startGame();
      } else if (answer === '2') {
        return Console.close();
      }
    });
  }

  isDuplicated(input) {
    const numberSet = new Set([...input]);

    return numberSet.size !== input.length;
  }

  isStrike(number, idx) {
    return this.answer[idx] === number;
  }

  isBall(number, idx) {
    return this.answer[idx] !== number && this.answer.includes(number);
  }

  getMessage(cnt, msgUnitStr) {
    if (cnt === 0) return '';

    return `${cnt}${msgUnitStr}`;
  }

  evaluate(input) {
    const cnt = {
      strike: 0,
      ball: 0,
    };

    for (let i = 0; i < 3; i++) {
      if (this.isStrike(input[i], i)) {
        cnt.strike += 1;
      } else if (this.isBall(input[i], i)) {
        cnt.ball += 1;
      }
    }

    const hintMessage = HINT_UNITS.map((hintUnit) => this.getMessage(cnt[hintUnit], HINT_UNITS_OBJ[hintUnit]))
      .join(SPACE_BAR)
      .trim();

    return hintMessage !== EMPTY ? hintMessage : HINT_MSG.nothing;
  }

  validate(input) {
    const regExp = new RegExp(/^[1-9]{1,3}$/);

    if (regExp.test(input) && !this.isDuplicated(input)) {
      const hintMessage = this.evaluate(input);
      Console.print(hintMessage);

      if (hintMessage === HINT_MSG.end) {
        return this.terminate();
      } else {
        return this.getUserInput(this.validate);
      }
    } else {
      throw new Error(INVALID_INPUT_ERR);
    }
  }
}

module.exports = App;
