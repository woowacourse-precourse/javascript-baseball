const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const app = new App();
    var input = app.setInput();
    numberCheck(input);
  }

  setInput() {
    var inputNumber;
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (inputNumber) => {
      console.log(`입력한 숫자 : ${inputNumber}`);
    });
  }
  
}

function numberCheck(input) {
  if(typeof(input) !== "number")
    throw '숫자를 입력해주세요';
  if(input.length !== 3)
    throw '숫자 3자리가 아닙니다.';
  
}

module.exports = App;
