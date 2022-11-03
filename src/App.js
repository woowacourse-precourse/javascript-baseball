class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    this.init();
  }

  init() {}
}

const app = new App();
app.play();

module.exports = App;
