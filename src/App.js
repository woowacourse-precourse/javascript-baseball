const MissionUtils = require("@woowacourse/mission-utils");

class App {

  constructor () {

  }

  start_message () {
    const str = "숫자 야구 게임을 시작합니다.";
    return str;
  }

  random_three_numbers() {
    
  }

  play() {

    MissionUtils.Console.print(this.start_message());



  }
}

const app = new App();
app.play();

module.exports = App;

