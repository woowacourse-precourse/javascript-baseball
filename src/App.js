const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.initRandomArray();
  }

  play() {
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.check(input);
      this.initInputArray(input);

      const resultString = this.getResultString();
      MissionUtils.Console.print(resultString);

      if (resultString === '3스트라이크') {
        MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        this.replay();
      } else {
        this.play();
      }
    });
  }

  check(input) {
    if (input.length !== 3) throw new Error('3글자가 아닙니다');

    const set = new Set();
    input.split('').forEach((character) => {
      const number = parseInt(character);
      if (isNaN(number)) throw new Error('숫자가 아닙니다');
      if (number === 0) throw new Error('0이 포함되어 있습니다');
      set.add(number);
    });

    if (set.size !== 3) throw new Error('중복된 숫자입니다');
  }

  initRandomArray() {
    const randomArray = [];
    while (randomArray.length < 3) {
      const random = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!randomArray.includes(random)) {
        randomArray.push(random);
      }
    }
  
    this.randomArray = randomArray;
  }

  initInputArray(input) {
    const inputArray = [];
    input.split('').forEach((character) => {
      inputArray.push(parseInt(character));
    });

    this.inputArray = inputArray;
  }

  getResultString() {
    const { ball, strike } = this.getBallStrike();

    if (ball === 0 && strike === 0) return '낫싱';
    if (ball === 0) return `${strike}스트라이크`;
    if (strike === 0) return `${ball}볼`;
    return `${ball}볼 ${strike}스트라이크`;
  }

  getBallStrike() {
    let ball = 0, strike = 0;
    for (let i = 0; i <= 2; i++) {
      if (this.randomArray[i] === this.inputArray[i]) {
        strike += 1;
      } else if (this.randomArray.includes(this.inputArray[i])) {
        ball += 1;
      }
    }

    return { ball, strike };
  }

  replay() {
    MissionUtils.Console.print('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.');
    MissionUtils.Console.readLine('', (input) => {
      if (input === '1') {
        this.initRandomArray();
        this.play();
      } else if (input === '2') {
        MissionUtils.Console.close();
      } else {
        throw new Error('1이나 2가 아닙니다');
      }
    });
  }
}

module.exports = App;
