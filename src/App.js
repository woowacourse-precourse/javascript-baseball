const MissionUtils = require("@woowacourse/mission-utils");
class App {

  start(){
    MissionUtils.Console.readLine('숫자 야구 게임을 시작합니다', (answer) => {
    console.log(`닉네임: ${answer}`);
    });
  }



  
}
const app = new App
app.play()
// module.exports = App;
