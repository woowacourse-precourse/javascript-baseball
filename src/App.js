const MissionUtils = require("@woowacourse/mission-utils");

let user = [];
let computer = [];

class App {

  play() {
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    //console.log(computer);
    this.input();
  }

  input(){
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      user = answer.split('').map((el) => parseInt(el));
      //console.log(user);
      MissionUtils.Console.close();
    });
  }

}

const app = new App();
app.play();

module.exports = App;
