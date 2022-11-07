const MissionUtils = require("@woowacourse/mission-utils");

class App {
    initGame() {
        MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
        this.selectComputerNumber();
    }

    selectComputerNumber() {
      const random_number = [];
      while (random_number.length < 3) {
          const selected_number = MissionUtils.Random.pickNumberInRange(1, 9);
          if (!random_number.includes(selected_number)) {
              random_number.push(selected_number);
          }
      }
      this.computer_number = random_number;
  }
  getUserInputNumber() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input_num) => {
        console.log(input_num);
    });
}


}
const app = new App;
app.play();
module.exports = App;