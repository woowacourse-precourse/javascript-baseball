const MissionUtils = require("@woowacourse/mission-utils");
class App {
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.Randomnum();
  }

  Randomnum() {
    var computernum =[];
    while (computernum.length < 3) {
      let num = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computernum.includes(num)) {
        computernum.push(num);
      }
    }
    this.Userinput(computernum);
  }
}

countstrike(inputArr, computernum) {
  let strike =0;
  for (let i = 0; i < 3; i++) {
    if (inputArr[i] === computernum[i]) {
      strike++;
    }
  }
  return strike;
}

countball(inputArr, computernum) {
  let ball =0;
  for (let i = 0; i < 3; i++) {
    if (computernum.includes(inputArr[i]) && inputArr[i] !== computernum[i]) {
      ball++;
    }
  }
  return ball;
}
module.exports = App;
