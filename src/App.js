const MissionUtils = require("@woowacourse/mission-utils");

class App {
   play() {
    this.start();
    this.randomNumber();
  }
  start(){
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }

  randomNumber(){
    let computer = [];
    for(let i = 0; computer.length < 3; i++) {
      const randomN = MissionUtils.Random.pickNumberInRange(1, 9);
      if (computer[i-1] !== randomN) {
        computer.push(randomN[i]);
      }
    }
    MissionUtils.Console.print(computer);
    return computer;
  }

  userNumber() {
    let user = [];
    MissionUtils.Console.readLine('숫자를 입력해주세요.', (answer) => {
      let userN = answer.split("").map((element) => parseInt(element));
      console.log(`: ${answer}`);
      this.checkuser(userN);
      this.compare(com, user);
    });
  }

  checkuser(arr) {
    if (arr.length != 3) {
      throw '잘못된 값을 입력하여 게임을 종료합니다.'
    }
  }

  





}


const app = new App();
app.play();



//module.exports = App;
