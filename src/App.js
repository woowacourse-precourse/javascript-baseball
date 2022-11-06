const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    computer()
    input()
  }
}
  
function computer() {
  const COM_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  console.log(COM_NUMBER)
}

function input() {
  while(CHECK_ANSWER == false){
    MissionUtils.Console.readLine('숫자를 입력해 주세요', (answer) => {
      MissionUtils.Console.print('ㅠㅠ')
      // inputcheck(answer);
    })
  };
}

function inputcheck(answer) {
  if (answer.regExp == /(?:d{3})$/) {
    throw exception()
  }
}
function exception() {
  MissionUtils.Console.print('잘못된 숫자를 입력하여 게임을 종료합니다.')
}
module.exports = App;
