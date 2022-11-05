const MissionUtils = require("@woowacourse/mission-utils");
const readLine = MissionUtils.Console.readLine;
const print = MissionUtils.Console.print;
const closeConsole = MissionUtils.Console.close;

function makeRandomNumber() {
  let arr = new Set();
  while (arr.size < 3) {
    arr.add(MissionUtils.Random.pickNumberInRange(1, 9));
  }
  return Array.from(arr);
}

function userInputNumberException(inputArray) {
  let checkCondition = 0;
  if (inputArray.length === 3) {
    checkCondition += 1;
  }
  // 배열 안에 수들이 모두 숫자인지.
  if (!inputArray.includes(NaN)) {
    checkCondition += 1;
  }
  //1 ~ 9의 범위인지
  if (!inputArray.includes(0)) {
    checkCondition += 1;
  }
  //다 다른 수인가. set 사용
  if (new Set(inputArray).size === 3) {
    checkCondition += 1;
  }
  if (checkCondition === 4) {
    return true;
  }
  return false;
}

function makeUserInputNumber() {
  let userInputNumbers;
  let exceptionSign;
  readLine("숫자를 입력해주세요 : ", (inputNumber) => {
    userInputNumbers = [...inputNumber].map(Number);
    exceptionSign = userInputNumberException(userInputNumbers);

    if (exceptionSign) {
      return userInputNumbers;
    } else {
      print("게임 종료");
      closeConsole();
    }
  });
}

class App {
  play() {
    print("숫자 야구 게임을 시작합니다.");
    let randomNumbers = makeRandomNumber();
    let userInputNumbers = makeUserInputNumber();
  }
}
const app = new App();
app.play();
module.exports = App;
