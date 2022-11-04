//indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용

const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    let computer = [];
    computer = computer_randomnumber();

    let user = ""
    user = user_inputnumber();

    if(user == 1){
      throw "is not three numbers";
    }

    if(user == 2){
      throw "is not number";
    }
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
  return COMPUTER_NUMBER;
}

function user_inputnumber(){
  const USER_NUMBER = MissionUtils.Console.readLine();
  if(USER_NUMBER.length != 3) {
    return 1;
  }
  if(USER_NUMBER == String){
    return 2;
  }
  return USER_NUMBER;
}


module.exports = App;
