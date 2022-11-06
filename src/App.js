/**
 * 1. 실행 시 "숫자 야구 게임을 실행합니다." 출력 후
 * 2. 숫자를 입력해주세요  : (랜덤 3개 숫자 입력)
 *    a. 숫자가 아니거나 3글자 이상시 return 
 * 3. 
 */

class App {
  play() {
    console.log("숫자 야구 게임을 시작합니다.")
  }
  //유저 입력 받기
  userNumber() {
    var readline = require('readline');

    var r = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    r.question("숫자를 입력해주세요 : ", function (numbers) {
      r.close() // 반드시 close()를 해줘야 합니다.ß
      return numbers
    });
  }
  computer() {
    const computer = [];
    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
  }


}
const app = new App()
app.play()

module.exports = App;
