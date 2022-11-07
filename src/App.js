const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");
class App {
  gameStart(){
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computerNumber = this.pickRandomNumber();
  }

  pickRandomNumber() {
    let randomNumber = [];
    while (randomNumber.length !== 3) {
      const pickNumber = Random.pickNumberInRange(1,9);
      if (!randomNumber.includes(pickNumber)) {
        randomNumber.push(pickNumber);
      }
    }
    return randomNumber;
  }

  play() {
    this.gameStart();
  }
}

module.exports = App;
