const MissionUtils = require("@woowacourse/mission-utils");
class App {
  randomNumber(){
    const computer = [];
    while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
     computer.push(number);
       }
     }    
  }
  inputNumber() {
    Console.readLine("숫자를 입력해주세요 : ", (ans) => {
      if (ans.length === 3 && !isNaN(Number(ans))) {
        MissionUtils.Console.print("중복되지 않은 숫자 3개를 입력해주세요.");
      }
      const playerNumber = [];
      let res = {};

        playerNumber.forEach((num, i) => {
        if (computer[i] === num) {
          res.strike = res.strike + 1 || 1;
        }
        if (computer[i] !== num && computer.includes(num)) {
          res.ball = res.ball + 1 || 1;
        }
      });
    });
  }
  play() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
    randomNumber();
  }
}
const app = new App();
app.play();
module.exports = App;
