import MissionUtils from '@woowacourse/mission-utils';
import Computer from './Computer.js';
import User from './User.js';

const APP_MESSAGE = {
  hello: '숫자 야구 게임을 시작합니다.',
  bye: '숫자 야구 게임을 종료합니다.',
};

class App {
  constructor() {
    MissionUtils.Console.print(APP_MESSAGE.hello);
  }

  play() {
    this.computer = new Computer();
    this.user = new User();
  }
}

const app = new App();
app.play();

// module.exports = App;
