const MissionUtils = require("@woowacourse/mission-utils");
/*
MissionUtils.Console.readLine("닉네임을 입력해주세요 ->", (answer) => {
  console.log(`닉네임 : ${answer}`);
  MissionUtils.Console.print("안녕하세요.");
  MissionUtils.Console.close();
  console.log(MissionUtils.Random.pickNumberInRange(1, 10));
  console.log(MissionUtils.Random.pickNumberInList([1, 2, 3, 4, 5]));
  console.log(MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3));
});*/
const LENGTH = 3;

class App {
  constructor() {
    this.target = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    this.io = MissionUtils.Console;
    this.io.print("숫자 야구 게임을 시작합니다.");
    this.userInput = undefined;
  }

  play() {
    // 사용자의 입력 값을 받음
    this.io.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.userInput = answer;
      // console.log(this.userInput);
      this.validation(parseInt(this.userInput));
    });
  }

  // 유효성 검사
  validation(input) {
    if (isNaN(input)) {
      throw new Error("정수 값을 입력해주세요!");
    }

    const len = Math.ceil(Math.log10(input + 1));
    if (len !== 3) throw new Error("서로 다른 3자리의 수를 입력해주세요!");

    this.isDuplicate(input);

    if (input < 0) throw new Error("음수가 아닌 값을 입력해주세요.");
  }

  isDuplicate(input) {
    const checkArray = Array(10).fill(false);
    const userInputArray = this.inputToArray(input);

    for (let i = 0; i < LENGTH; i++) {
      let idx = userInputArray[i];
      if (checkArray[idx]) throw new Error("중복이 있습니다!");

      checkArray[idx] = true;
    }
  }

  inputToArray(input) {
    const userInputArray = [];

    while (input > 0) {
      userInputArray.push(input % 10);
      input = Math.floor(input / 10);
    }

    return userInputArray;
  }
}

const app = new App();
app.play();
module.exports = App;
