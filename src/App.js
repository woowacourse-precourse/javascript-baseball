import MissionUtils from '@woowacourse/mission-utils';

const MESSAGE = {
  hello: '숫자 야구 게임을 시작합니다.',
  bye: '숫자 야구 게임을 종료합니다.',
};

class App {
  constructor() {
    MissionUtils.Console.print(MESSAGE.hello);
  }

  play() {}
}

const app = new App();
app.play();

// module.exports = App;
