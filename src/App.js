// CHECK :: 레포지터리 :: https://github.com/joohaem/javascript-baseball
// CHECK :: 1주차 피드백 체크
// CHECK :: 커밋 컨벤션 :: https://gist.github.com/stephenparish/9941e89d80e2bc58a153#format-of-the-commit-message
// CHECK :: Random 값 추출 / Console 활용 -> MissionUtils 라이브러리

const Computer = require("./computer");
const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    const computer = Computer();

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) =>
      this.playOneRound(computer, number)
    );

    return this;
  }

  playOneRound(computer, number) {
    const { isEnd, print } = computer.checkGameResult(number);
    MissionUtils.Console.print(print);

    switch (isEnd) {
      case true:
        MissionUtils.Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        break;

      case false:
        MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (number) =>
          this.playOneRound(computer, number)
        );
        break;
    }

    return this;
  }
}

module.exports = App;

const app = new App();
app.play();
