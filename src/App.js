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

class App {
  constructor() {
    this.target = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);

    console.log(this.target);
  }

  play() {}
}

const app = new App();
app.play();
module.exports = App;
