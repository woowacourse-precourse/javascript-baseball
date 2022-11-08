const MissionUtils = require('@woowacourse/mission-utils');

class App {
  static isValidMenuInput(input) {
    return input.length === 1 && Number(input) >= 1 && Number(input) <= 2;
  }

  static isValidPlayInput(input) {
    return (
      input.length === 3
      && [...input].every((x) => Number(x) >= 1 && Number(x) <= 9)
      && (new Set(input)).size === 3
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

  play() {
    const GREETING_MESSAGE = '숫자 야구 게임을 시작합니다';
    const PLAY_QUESTION = '숫자를 입력해주세요 :';
    const COMPLETE_MESSAGE = '3개의 숫자를 모두 맞히셨습니다! 게임 종료';
    const MENU_QUESTION = '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요';
    let answer = App.pickThreeDigits();

    const turn = function playOneTurn(input) {
      if (!App.isValidPlayInput(input)) {
        throw new Error('잘못된 입력입니다');
      }

      const guess = App.getGuessArray(input);
      const judged = App.judge(guess, answer);
      const judgeMessage = App.getMessage(judged);
      MissionUtils.Console.print(judgeMessage);

      if (judged[1] === 3) {
        MissionUtils.Console.print(COMPLETE_MESSAGE);
        MissionUtils.Console.readLine(MENU_QUESTION, menuSelect);
        return;
      }

      MissionUtils.Console.readLine(PLAY_QUESTION, turn);
    };

    const menuSelect = function menuSelect(input) {
      if (!App.isValidMenuInput(input)) {
        throw new Error('잘못된 입력입니다');
      }

      if (input === '1') {
        answer = App.pickThreeDigits();
        MissionUtils.Console.readLine(PLAY_QUESTION, turn);
        return;
      }

      MissionUtils.Console.close();
    };

    MissionUtils.Console.print(GREETING_MESSAGE);
    try {
      MissionUtils.Console.readLine(PLAY_QUESTION, turn);
    } catch (e) {
      MissionUtils.Console.close();
      throw e;
    }
  }
}

module.exports = App;
