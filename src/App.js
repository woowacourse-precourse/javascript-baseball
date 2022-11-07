const MissionUtils = require("@woowacourse/mission-utils");
const constants = require('./constants');

class App {
  play() {
    let computer = [];
    let strike;
    let ball;
    let nothing;

    // 컴퓨터의 랜덤한 숫자 3개
    function computerNumbers() {
      while (computer.length < 3) {
        let number = MissionUtils.Random.pickNumberInRange(1, 9);
        if (!computer.includes(number)) { //중복되지 않는 숫자만 뽑기
          computer.push(number);
        }
      }
    }


    computerNumbers();

  }
  }

module.exports = App;
