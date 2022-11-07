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

class App {
  play() {}
}


module.exports = App;
