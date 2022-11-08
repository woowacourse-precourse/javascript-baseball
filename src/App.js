const { Random, Console } = require('@woowacourse/mission-utils');

const INVALID_INPUT_ERR = 'invalid input error';
const SPACE_BAR = ' ';
const END_GAME = 'end game';
const HINT_UNITS = ['ball', 'strike'];
const HINT_UNITS_OBJ = {
  ball: '볼',
  strike: '스트라이크',
};

class App {
  play() {
    this.answer = this._getRandomsStr([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
    Console.print('숫자 야구 게임을 시작합니다.');
    this.getUserInput(this.validate);
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
    Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (answer) => {
      if (answer === '1') {
        return this.play();
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
    if (this.answer === input) return END_GAME;

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

    const hintMessage = HINT_UNITS.map((hintUnit) => this.getMessage(cnt[hintUnit], HINT_UNITS_OBJ[hintUnit])).join(
      SPACE_BAR
    );

    return hintMessage !== SPACE_BAR ? hintMessage : '낫싱';
  }

  validate(input) {
    const regExp = new RegExp(/^[1-9]{1,3}$/);

    if (regExp.test(input) && !this.isDuplicated(input)) {
      const hintMessage = this.evaluate(input);

      if (hintMessage === END_GAME) {
        return this.terminate();
      } else {
        Console.print(hintMessage);
        return this.getUserInput(this.validate);
      }
    } else {
      throw new Error(INVALID_INPUT_ERR);
    }
  }
}

module.exports = App;
