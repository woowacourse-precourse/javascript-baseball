const MissionUtils = require("@woowacourse/mission-utils");
const Error = require("./components/Error");
const Count = require("./components/Count");
const Result = require("./components/Result");

class App {
  constructor() {
    this.error = new Error();
    this.count = new Count();
    this.result = new Result();
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.getComputerNumbers();
  }

  getComputerNumbers() {
    const computerNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    console.log(computerNumbers);
    this.getUserNumbers(computerNumbers);
  }

  getUserNumbers(computerNumbers) {
    MissionUtils.Console.readLine('숫자를 입력해주세요: ', (userInput) => {
      this.error.check(userInput);
      const [strikeCount, ballCount] = this.count.get(userInput, computerNumbers);
      const result = this.result.get(strikeCount, ballCount);

      return this.printMessage(result, computerNumbers);
    });
  }

  printMessage(result, computerNumbers) {
    if (result === 'answer') {
      MissionUtils.Console.print('3스트라이크');
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      return this.askRestart();
    }

    if (result === 'nothing') {
      MissionUtils.Console.print('낫싱');
      return this.getUserNumbers(computerNumbers);
    }

    MissionUtils.Console.print(result);
    return this.getUserNumbers(computerNumbers);
  }

  askRestart() {
    MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    MissionUtils.Console.readLine('',(userInput) => {
      if (userInput === '1') {
        return this.play();
      }

      if (userInput === '2') {
        return MissionUtils.Console.close();
      }

      return this.error.print();
    });
  }
}

const app = new App();
app.play();


