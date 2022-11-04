const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    this.showMessage()
  }
  showMessage(){
    MissionUtils.Console.print('안녕하세요.')
    MissionUtils.Console.print(MissionUtils.Random.pickNumberInList([1, 2, 3]))
    MissionUtils.Console.close()
  }

}

const app = new App();
app.play();
module.exports = App;
