const MissionUtils = require('@woowacourse/mission-utils');

class App {
  constructor() {
    this.computer = [];
  }
  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
    this.start();
  }

  start() {
    this.computer = this.setAnswer();
    this.input();
  }

  setAnswer() {
    const computer = [];

    while (computer.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  input() {
    this.readLine('숫자를 입력해주세요 : ', userNumber => {
      const { strike, ball } = this.checkAnswer(userNumber);
      const IS_NOTHING = strike === 0 && ball === 0;
      const IS_ANSWER = strike === 3;

      if (IS_ANSWER) {
        this.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        this.replay();
      } else {
        const BALL_STRIKTE_CONTENT = `${ball === 0 ? '' : `${ball}볼 `}${
          strike === 0 ? '' : `${strike}스트라이크`
        }`;
        const CONTENT = IS_NOTHING ? '낫싱' : BALL_STRIKTE_CONTENT;

        this.print(CONTENT);
        this.input();
      }
    });
  }

  checkAnswer(userNumber) {
    const userNumberArr = userNumber.split('').map(Number);
    let [strike, ball] = [0, 0];

    if (userNumber.length !== 3) throw Error('잘못된 입력입니다.');

    userNumberArr.forEach((number, idx) => {
      const findIndex = this.computer.indexOf(number);

      if (findIndex === idx) strike += 1;
      else if (findIndex !== -1) ball += 1;
    });

    return { strike, ball };
  }

  replay() {
    this.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n', number => {
      if (number === '1') this.start();
      else if (number === '2') MissionUtils.Console.close();
      else throw Error('잘못된 입력입니다.');
    });
  }

  print(content) {
    MissionUtils.Console.print(content);
  }

  readLine(content, func) {
    MissionUtils.Console.readLine(content, func);
  }
}

const app = new App();
app.play();
// module.exports = App;
