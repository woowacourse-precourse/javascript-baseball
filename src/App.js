class App {
  play() {
    // 1. 게임 시작 문구 출력
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    // 2. 컴퓨터의 랜덤 숫자 만들기
    const computerRandomNumber = this.getComputerRandomNumber();

    // 3. 숫자를 입력받는다. (반복되는 부분)
    this.getUserAnswer(computerRandomNumber);
  }
}

const app = new App();
app.play();

module.exports = App;
