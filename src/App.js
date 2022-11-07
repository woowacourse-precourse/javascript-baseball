const MissionUtils = require("@woowacourse/mission-utils");

class App {
  // 게임 종료 여부 확인(1: 시작, 2: 종료)
  gameOver() {

  }

  // 결과 출력
  printResult() {

  }

  // 입력 값과 컴퓨터 숫자 비교
  playBaseball() {

  }

  // 입력값 확인
  checkAnswer(user) {
    if (user.length !== 3) throw new Error("입력 개수는 3개입니다!");
    else if ([...new Set(user)] !== 3) throw new Error("중복 입력입니다!");
  }

  // 사용자 입력
  userPlay() {
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      const user = answer.split('');
      this.checkAnswer(user);
      user.map(e => this.user.push(parseInt(e)));
      this.playBaseball(this.user);
    });
  }

  // 컴퓨터 랜덤으로 서로 다른 세 숫자 받기
  computerSet() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
        this.computer = computer;
      }
    }
  }

  // 게임 시작
  play() {
    this.computer = [];
    this.user = [];

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    this.computerSet();
    this.userPlay();
  }
}

const app = new App();
app.play();

module.exports = App;