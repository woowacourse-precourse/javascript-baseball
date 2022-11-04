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

  printResult(numbers, answers) {
    const [ball, strike] = this.getBallStrike(numbers, answers);
    let result;

    if (ball && strike) result = `${ball}볼 ${strike}스트라이크`;
    else if (ball) result = `${ball}볼`;
    else if (strike) result = `${strike}스트라이크`;
    else result = `낫싱`;

    MissionUtils.Console.print(result);
    if (ball && strike) this.inputRestartOrEnd();
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

  play() {}
}

module.exports = App;
