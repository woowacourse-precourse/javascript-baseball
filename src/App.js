const User = require('./User');
// 게임을 진행하는 클래스
class App {
  constructor() {
    this.User = new User();
  }

  play() {}
}

module.exports = App;
