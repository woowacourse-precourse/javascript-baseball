const { Random } = require('@woowacourse/mission-utils');
const { MESSAGE, CONSTANT, REGEX } = require('./Constant');

class BaseballGameTools {
  /**
   * 숫자야구 게임에 사용할 랜덤한 수를 리턴합니다.
   * @returns {Array} - 1~9로만 이루어진, 세 개의 서로 다른 수가 포함된 배열
   */
  static getThreeNumber() {
    const randomNumberArray = [];
    while (randomNumberArray.length < CONSTANT.DIGIT_LIMIT) {
      let chosenNumber;

      do {
        chosenNumber = Random.pickNumberInRange(1, 9);
      } while (randomNumberArray.indexOf(chosenNumber) !== -1);

      randomNumberArray.push(chosenNumber);
    }

    return randomNumberArray;
  }

  /**
   * 플레이어가 게임 중 추측한 값이 형식에 어긋날 경우 예외를 발생시킵니다.
   * @param {string} playerGuess - 플레이어의 입력
   */
  static errorIfInvalidGuessFormat(playerGuess) {
    if (!REGEX.GUESS.test(playerGuess) || new Set(playerGuess.split('')).size !== 3) {
      throw Error(MESSAGE.FORMAT_ERROR_GUESS);
    }
  }

  /**
   * 플레이어가 재시작 여부를 고르기 위해 입력한 값이 형식에 어긋날 경우 예외를 발생시킵니다.
   * @param {string} playerChoice - 플레이어의 입력
   */
  static errorIfInvalidChoiceFormat(playerChoice) {
    if (!REGEX.CHOICE.test(playerChoice)) {
      throw Error(MESSAGE.FORMAT_ERROR_CHOICE);
    }
  }

  /**
   * 정답과 플레이어가 추측한 입력이 주어지면 게임 결과를 반환합니다.
   * @param {Array} answerArray - 정답 배열
   * @param {string} playerInput - 플레이어가 추측한 입력
   * @returns {string} - 게임 결과
   */
  static getBaseballResultMessage(answerArray, playerInput) {
    const playerGuessArray = playerInput.split('').map((digit) => Number(digit));
    let [strike, ball] = [0, 0];
    let baseballResult;

    playerGuessArray.forEach((currentDigit, index) => {
      const searchResult = answerArray.indexOf(currentDigit);

      if (searchResult === index) {
        strike += 1;
      } else if (searchResult !== -1) {
        ball += 1;
      }
    });

    if (strike > 0 && ball > 0) {
      baseballResult = `${ball}볼 ${strike}스트라이크`;
    } else if (strike > 0) {
      baseballResult = `${strike}스트라이크`;
    } else if (ball > 0) {
      baseballResult = `${ball}볼`;
    } else {
      baseballResult = '낫싱';
    }

    return baseballResult;
  }
}

module.exports = BaseballGameTools;
