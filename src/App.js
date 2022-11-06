const { Console } = require("@woowacourse/mission-utils");
const GenerateRandomNumbers = require("./Utils/GenerateRandomNumbers");
const VerificateInput = require("./Utils/VerificateInput");
class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.')
    const Random = GenerateRandomNumbers();
  }
}
const app = new App();
app.play();

module.exports = App;
