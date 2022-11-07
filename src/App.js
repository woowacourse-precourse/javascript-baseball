const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;

const getUserInput = (f, num) => {
  if (f(num) === false) {
    throw '유효한 입력값이 아닙니다!';
  }
  return num;
};



class App {
  play() {}
}

module.exports = App;
