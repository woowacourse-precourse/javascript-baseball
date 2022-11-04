// CHECK :: 레포지터리 :: https://github.com/joohaem/javascript-baseball
// CHECK :: 1주차 피드백 체크
// CHECK :: 커밋 컨벤션 :: https://gist.github.com/stephenparish/9941e89d80e2bc58a153#format-of-the-commit-message
// CHECK :: Random 값 추출 / Console 활용 -> MissionUtils 라이브러리

const Computer = require("./computer");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computer = Computer();
    const answer = computer.computerNumberStr;
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    console.log(computer.checkGameResult("123"));
  }

  playOneRound() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) => {});
  }
}

module.exports = App;

const app = new App();
app.play();
