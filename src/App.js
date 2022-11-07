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
    Console.print('숫자 야구 게임을 시작합니다.');
    Console.readLine('숫자를 입력해주세요 : ', cbFn);
  }

  terminate() {
    // 게임을 종료 메시지를 발생시킨다.
  }

  isDuplicated(input) {
    const numberSet = new Set([...input]);

    return numberSet.size === input.length;
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

    try {
      if (regExp.test(input) && !isDuplicated(input)) {
        // 입력값이 3자리 숫자이고, 중복숫자가 없다면 다음 힌트제공 기능을 이용한다.
        const hintMessage = this.evaluate(input);
        if (hintMessage === END_GAME) {
          return this.terminate();
        } else {
          Console.print(hintMessage);
          return this.getUserInput(this.validate);
        }
      } else {
        // 입력이 잘못되었다면 예외를 발생시키고 게임을 종료시킨다.
        throw new Error(INVALID_INPUT_ERR);
      }
    } catch (e) {
      if (e.message === INVALID_INPUT_ERR) {
        Console.print('유효하지 않은 입력입니다. 3자리 중복되지 않은 숫자를 입력하세요.\n게임을 종료합니다.');
        Console.close();
      }
    }
  }
}

module.exports = App;
