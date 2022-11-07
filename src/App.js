const MissionUtils = require("@woowacourse/mission-utils");

class App {

  constructor() {
    this.computer_number = 0;
    this.user_number=0;
  }
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.selectComputerNumber();
    this.startGame();
  }
  startGame() {
    this.getUserInputNumber();
  }

  selectComputerNumber() {
    const random_number = [];
    while (random_number.length < 3) {
      const selected_number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!random_number.includes(selected_number)) {
        random_number.push(selected_number);
      }
    }
    this.changeComputerNumberToArray(random_number);
  }
  getUserInputNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input_num) => {
      this.changeUserNumberToArray(input_num);
    });
  }
  changeComputerNumberToArray(random_number){
    this.computer_number = (random_number + '').split(',');
  }
  changeUserNumberToArray(input_num){
    this.user_number = (input_num + '').split('');
  }
  
}
const app = new App;
app.play();
module.exports = App;