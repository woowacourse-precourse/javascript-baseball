const MissionUtils = require("@woowacourse/mission-utils");


class App {

  selectComputerNum(){
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }


  getGameResult(){

  }


  play() {

    const computer_num = this.selectComputerNum();

    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");

    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (input) => {
      console.log(input);
      MissionUtils.Console.close();
    })
    
    // while(getGameResult(input)){}

  }

}

module.exports = App;


const app = new App();
app.play();

