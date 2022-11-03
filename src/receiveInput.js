const MissionUtils = require('@woowacourse/mission-utils');
const exceptionHandling = require('./exceptionHandling');
const game = require('./game');

const receiveInput = () => {
  MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (num) => {
    num;
    if (
      isNaN(Number(num)) ||
      num <= 0 ||
      String(num).length !== 3 ||
      String(num).includes('0')
    ) {
      exceptionHandling();
      return;
    }
    game(num);
  });
};

module.exports = receiveInput;
