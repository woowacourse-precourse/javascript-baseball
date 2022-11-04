const MissionUtils = require("@woowacourse/mission-utils");

class App {
  getThreeRandom() {
    const randoms = [];

    while (randoms.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randoms.includes(randomNumber)) {
        randoms.push(randomNumber);
      }
    }
    return randoms.join('');
  };

  printStart() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  };

  isUniqueThreeNumber(numbers) {
    return (numbers.length === 3) && (numbers.length === new Set(numbers).size);
  };

  getBallStrike(numbers, answers) {
    let ball = 0;
    let strike = 0;

    Array.from(numbers).forEach((number, idx) => {
      if (number === answers[idx]) strike++;
      else if (answers.includes(number)) ball++;
    })
    return [ball, strike];
  };

  inputRestartOrEnd() {
    MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', (number) => {
      if (number === '1') this.play();
      else if (number === '2') MissionUtils.Console.close();
      else throw new Error('입력 형식에 맞지 않습니다.');
    });
  };

  printResult(numbers, answers) {
    const [ball, strike] = this.getBallStrike(numbers, answers);
    let result;

    if (ball && strike) result = `${ball}볼 ${strike}스트라이크`;
    else if (ball) result = `${ball}볼`;
    else if (strike) result = `${strike}스트라이크`;
    else result = `낫싱`;

    MissionUtils.Console.print(result);
    if (strike === 3) this.inputRestartOrEnd();
    else this.inputNumbers(answers);
  };

  inputNumbers(answers) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (numbers) => {
      if (this.isUniqueThreeNumber(numbers)) {
        this.printResult(numbers, answers);
      } else {
        throw new Error('입력 형식에 맞지 않습니다.')
      }
    });
  }

  play() {
    const answers = this.getThreeRandom();

    this.printStart();
    this.inputNumbers(answers);
  }
}

module.exports = App;
