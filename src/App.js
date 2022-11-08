const MissionUtils = require('@woowacourse/mission-utils');

class App {
  static isValidMenuInput(input) {
    return input.length === 1 && Number(input) >= 1 && Number(input) <= 2;
  }

  static isValidPlayInput(input) {
    return (
      input.length === 3
      && Array.from(input).every((x) => Number(x) >= 1 && Number(x) <= 9)
    );
  }

  static pickThreeDigits() {
    const digits = [];
    while (digits.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!digits.includes(number)) {
        digits.push(number);
      }
    }
    return digits;
  }

  static getGuessArray(input) {
    return Array.from(input, Number);
  }

  static judge(guess, answer) {
    const answerSet = new Set(answer);

    const containCount = guess.filter((x) => answerSet.has(x)).length;
    const strikeCount = guess.filter((x, i) => answer[i] === x).length;

    const ballCount = containCount - strikeCount;
    return [ballCount, strikeCount];
  }

  static getMessage(judged) {
    const UNITS = ['볼', '스트라이크'];
    const out = judged
      .map((x, i) => (x > 0 ? `${x}${UNITS[i]}` : ''))
      .join(' ')
      .trim();

    return out.length ? out : '낫싱';
  }

  play() { }
}

module.exports = App;
