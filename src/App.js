const MissionUtils = require("@woowacourse/mission-utils");

// 같은 수가 같은 자리에 있으면 스트라이크, 다른 자리에 있으면 볼, 같은 수가 전혀 없으면 낫싱이란 힌트를 얻고, 그 힌트를 이용해서 먼저 상대방(컴퓨터)의 수를 맞추면 승리한다.
// 예) 상대방(컴퓨터)의 수가 425일 때
// 123을 제시한 경우 : 1스트라이크
// 456을 제시한 경우 : 1볼 1스트라이크
// 789를 제시한 경우 : 낫싱
// 위 숫자 야구 게임에서 상대방의 역할을 컴퓨터가 한다. 컴퓨터는 1에서 9까지 서로 다른 임의의 수 3개를 선택한다. 게임 플레이어는 컴퓨터가 생각하고 있는 서로 다른 3개의 숫자를 입력하고, 컴퓨터는 입력한 숫자에 대한 결과를 출력한다.
// 이 같은 과정을 반복해 컴퓨터가 선택한 3개의 숫자를 모두 맞히면 게임이 종료된다.
// 게임을 종료한 후 게임을 다시 시작하거나 완전히 종료할 수 있다.
// 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시킨후 애플리케이션은 종료되어야 한다.

class App {
  play() {
    const computer_number = this.getRandomNum();
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.guessNum();
  }
  // 랜덤 번호 생성
  getRandomNum() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
  }
  // 사용자가 번호를 맞추기
  guessNum() {
    MissionUtils.Console.readLine("숫자를 입력해 주세요 : ", (answer) => {
      MissionUtils.Console.print(answer);
      MissionUtils.Console.close();
      if (answer === "123") {
        this.print("정답입니다!");
      } else {
        this.print("틀렸습니다!");
        this.guessNum();
      }
    });
  }
  print(string) {
    MissionUtils.Console.print(string);
    MissionUtils.Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
