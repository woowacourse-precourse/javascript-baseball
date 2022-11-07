const MissionUtils = require('@woowacourse/mission-utils');

class ReadLine {
  #readLine = MissionUtils.Console.readLine;

  input(text, callbackFunc) {
    this.#readLine(text, (userInput) => {
      if (Number.isNaN(parseInt(userInput, 10))) {
        throw new TypeError('숫자형태만 가능합니다.');
      }

      const userNumberArray = Array.from(userInput, (value) => parseInt(value, 10));
      callbackFunc(userNumberArray);
    });
  }
}

module.exports = ReadLine;
