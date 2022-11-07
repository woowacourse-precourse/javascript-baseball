const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;

const getUserInput = (f, num) => {
  return f(num);
};

const isValidNumber = value => {
  const regValidNumExp = /^[1-9]{3}$/;
  if (regValidNumExp.test(value) === false) {
    throw '유효한 숫자가 아닙니다!';
  }
  return value;
};

const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}

const parser = num => {
  const value = [];
  do {
    (digit = num % 10), value.push(digit);
    num = parseInt(num / 10);
  } while (num > 0);
  value.sort();
  return value;
};

class App {
  play() {}
}

module.exports = App;
