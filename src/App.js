const MissionUtils = require("@woowacourse/mission-utils");


function getInput(){
  MissionUtils.Console.print('숫자 야구게임을 시작합니다.');
  MissionUtils.Console.close();
}




class App {
  play() {
    getInput();
  }
}


const app = new App();
app.play();



module.exports = App;
