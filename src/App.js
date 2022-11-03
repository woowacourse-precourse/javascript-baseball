const MissionUtils = require("@woowacourse/mission-utils");

class App {
  async play() {
    print(`1~9 중 랜덤: ${pickNumberInRange(1, 9)}`);
    print(`1~9 중 랜덤: ${pickNumberInRange(1, 9)}`);
    print(`1~9 중 랜덤: ${pickNumberInRange(1, 9)}`);

    print("숫자 야구 게임을 시작합니다.");

    let nbr = await readLine("숫자를 입력해주세요 : ");
    print(nbr);
    nbr = await readLine("숫자를 입력해주세요 : ");
    print(nbr);
    nbr = await readLine("숫자를 입력해주세요 : ");
    print(nbr);

    print("숫자 야구 게임을 종료합니다.");
  }
}

function print(str) {
  MissionUtils.Console.print(str);
}

function readLine(question) {
  return new Promise((resolve, reject) => {
    MissionUtils.Console.readLine(question, (answer) => {
      resolve(answer);
    });
  });
}

function pickNumberInRange(startInclusive, endInclusive) {
  return MissionUtils.Random.pickNumberInRange(startInclusive, endInclusive);
}

module.exports = App;

const app = new App();
app.play();
