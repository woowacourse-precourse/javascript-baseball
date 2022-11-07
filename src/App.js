const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;

const getUserInput = (f, num) => {
  if (f(num) === false) {
    throw '유효한 입력값이 아닙니다!';
  }
  return num;
};

const isNumber = value => {
  const regNumExp = /[0-9]/g;
  if (regNumExp.test(value) === false) {
    throw '숫자가 아닙니다!';
  }
  return value;
};

const isValidNumber = value => {
  const regValidNumExp = /^\d{3}$/
  if (regValidNumExp.test(value) === false){
    throw '유효한 숫자가 아닙니다!'
  }
  return 
}




class App {
  play() {}
}

module.exports = App;
