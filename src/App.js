const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {}
}


const startNumberBaseball = () => {
  MissionUtils.Console.print("숫자 야구를 게임을 시작합니다.");
};

const inputNumber = (answerNumber) => {
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {
    
  });
};

module.exports = App;
