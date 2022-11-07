const MissionUtils = require("@woowacourse/mission-utils");
const Exception = require("./components/Exception");
const Count = require("./components/Count");
const Result = require("./components/Result");

class App {
  constructor() {
    this.exception = new Exception();
    this.Count = new Count();
    this.result = new Result();
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.getComputerNumbers();
  }

  getComputerNumbers() {
    const computerNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    this.getUserNumbers(computerNumbers);
  }

  getUserNumbers(computerNumbers) {
    MissionUtils.Console.readLine('숫자를 입력해주세요: ', (userInput) => {
      const isUserInputError = this.exception.checkError(userInput);

      if (isUserInputError === true) {
        throw new Error('잘못된 값을 입력하셨습니다. 게임 종료');
      }

      const [strikeCount, ballCount] = this.count.get(userInput, computerNumbers);
      const result = this.result.get(strikeCount, ballCount);

      return this.printMessage(result, computerNumbers);
    });
  }

  printResult(result, computerNumbers) {
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
    MissionUtils.Console.readLine('',(answer) => {
      if (answer === '1') {
        return this.play();
      }
      if (answer === '2') {
        return MissionUtils.Console.close();
      }

      throw new Error('잘못된 수를 입력하셨습니다.');
    });
  }
}

module.exports = App;
