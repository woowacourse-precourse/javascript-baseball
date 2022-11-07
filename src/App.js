const MissionUtils = require("@woowacourse/mission-utils");
const { Random, Console } = require("@woowacourse/mission-utils");

class App {
  constructor() {
    console.log("숫자 야구 게임을 시작합니다.");
  }
  play() {
    // console.log(MissionUtils.Random.pickNumberInList([1, 2, 3]), "ㄴㄹㅁㄴㄹ");
    // // 입력
    // Console.readLine("닉네임을 입력해주세요.", (answer) => {
    //   console.log(`닉네임: ${answer}`);
    // });
    // // 출력
    // Console.print("안녕하세요.");
    // Console.close();
  }

  makeRandomNum() {
    const computerRandomNum = [];
    while (computerRandomNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computerRandomNum.includes(number)) {
        computerRandomNum.push(number);
      }
    }

    console.log(computerRandomNum.join(""));

    return computerRandomNum.join("");
  }
}
const app = new App();
app.makeRandomNum();

module.exports = App;
