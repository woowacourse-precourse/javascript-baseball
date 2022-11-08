const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;

class BaseballGameFunc {
  static inputControl = num => {
    const regValidNumExp = /^[1-9]{3}$/;
    const testValidationSet = new Set(num.split(''));
    if (!regValidNumExp.test(num) || testValidationSet.size !== 3) {
      throw '유효한 값이 아닙니다!';
    }
  };

  static parser = num => {
    const value = [];
    do {
      let digit = num % 10;
      value.push(digit);
      num = parseInt(num / 10);
    } while (num > 0);
    value.reverse();
    return value;
  };

  static generateRandomNumber = () => {
    const computer = [];
    while (computer.length < 3) {
      let pickUp;
      do {
        pickUp = MissionUtils.Random.pickNumberInRange(1, 9);
      } while (computer.indexOf(pickUp) !== -1);
      computer.push(pickUp);
    }
    return computer;
  };

  static makeMap = list => {
    const newMap = new Map(list.map((item, idx) => [idx, item]));
    return newMap;
  };

  static countScore = (userInput, whereToFind) => {
    const ballAndStrike = {
      strike: 0,
      ball: 0,
      nothing: 0,
    };

    userInput.forEach((value, idx) => {
      const isIncludedAndSameIdx = whereToFind.get(idx) === value;
      const isIncludedValue = [...whereToFind.values()].includes(value);

      if (isIncludedValue && isIncludedAndSameIdx) ballAndStrike.strike++;
      else if (isIncludedValue && !isIncludedAndSameIdx) ballAndStrike.ball++;
      else ballAndStrike.nothing++;
    });

    return ballAndStrike;
  };

  static scoreMessagePrinter = score => {
    const [ball, strike] = [score.ball, score.strike];
    let scoreMessage;
    if (strike > 0 && ball > 0) {
      scoreMessage = `${ball}볼 ${strike}스트라이크`;
    } else if (strike > 0) {
      scoreMessage = `${strike}스트라이크`;
    } else if (ball > 0) {
      scoreMessage = `${ball}볼`;
    } else {
      scoreMessage = '낫싱';
    }
    return scoreMessage;
  };
}

module.exports = BaseballGameFunc;
