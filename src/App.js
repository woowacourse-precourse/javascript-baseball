class App {
  play() {
    // 정답 숫자 선정
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
  }
}

const app = new App();
app.play();

module.exports = App;
