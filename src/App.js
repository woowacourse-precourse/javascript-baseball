const receiveInput = require('./receiveInput');

class App {
  play() {
    console.log('숫자 야구 게임을 시작합니다.');
    receiveInput();
  }
}

const app = new App();
app.play();
module.exports = App;
