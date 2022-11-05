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
  if (inputArray.length !== 3) {
    throw new Error("세자리 숫자가 아닙니다!");
  }
  // 배열 안에 수들이 모두 숫자인지.
  if (inputArray.includes(NaN)) {
    throw new Error("숫자가 아닌 입력입니다.");
  }
  //1 ~ 9의 범위인지
  if (inputArray.includes(0)) {
    throw new Error("1 ~ 9 범위내어야 합니다");
  }
  //다 다른 수인가. set 사용
  if (new Set(inputArray).size !== 3) {
    throw new Error("같은 수가 중복입니다");
  }

  return true;
}

function makeUserInputNumber() {
  let userInputNumbers;
  readLine("숫자를 입력해주세요 : ", (inputNumber) => {
    userInputNumbers = [...inputNumber].map(Number);

    try {
      userInputNumberException(userInputNumbers);
      print(userInputNumbers);
      return userInputNumbers;
    } catch (e) {
      print("사용자 입력 예외 발생 게임 종료");
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
