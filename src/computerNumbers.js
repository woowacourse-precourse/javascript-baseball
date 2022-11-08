const MissionUtils = require('@woowacourse/mission-utils');

class computerNumbers {
    
  randomNumber() {
    let computer = [];

    while (computer.length < 3) {
      let number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        //중복되지 않는 숫자만 뽑기
        computer.push(number);
      }
    }
    return computer;
  }
}

const randomNumberComputer = new computerNumbers();
module.exports = randomNumberComputer;
