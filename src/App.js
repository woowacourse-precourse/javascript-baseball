//indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용

const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    computer = computer_randomnumber();

  }
}

function computer_randomnumber(){
  const COMPUTER_NUMBER = [];
  while(COMPUTER_NUMBER.length < 3) {
    //컴퓨터 숫자 범위 지정 (1 ~ 9)
    //MissionUtils.Random.pickNumberInRange 호출 할 때마다 ApplicationTest.js에서 randoms 배열의 값 하나씩 가져오기
    const COMPUTER_RANDOMNUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
    if(!COMPUTER_NUMBER.includes(COMPUTER_RANDOMNUMBER)) {
      COMPUTER_NUMBER.push(COMPUTER_RANDOMNUMBER);
    }
  }
}

module.exports = App;
