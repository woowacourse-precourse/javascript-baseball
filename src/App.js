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

class App {
  play() {}
}

module.exports = App;
