const MissionUtils = require("@woowacourse/mission-utils");

class App {
  computerInput() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) computer.push(number);
    }
    return computer
  }

  checkIsvaild(num) {
    if(num === '') throw new Error('입력해주세요.');
    if((/[^0-9]/g).match === null) throw new Error('숫자를 입력해주세요.');
    if(num.length !== 3) throw new Error('숫자 3개가 입력되지 않았습니다.');
    if([...new Set(num.split(""))].length !== 3) throw new Error('중복된 숫자가 있습니다.');
    if((/[^1-9]/g).test(num)) throw new Error('1~9 사이의 숫자만 입력할 수 있습니다.');
  }

  userInput() {
    MissionUtils.Console.readLine('숫자를 입력해주세요: ', (number) => {
      this.checkIsvaild(number);
      this.userInput();
    });
  }
  
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.computerInput();
    this.userInput();
  }
}

module.exports = App;