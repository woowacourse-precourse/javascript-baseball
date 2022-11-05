const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  play() {}
}

const letComputerInput = function() {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
}

const letUserInput = function() {
  Console.print("숫자 야구 게임을 시작합니다.");
  Console.readLine('숫자를 입력해주세요 : ', (answer) => {
    //answer의 예외사항 체크
  })
}

module.exports = App;

