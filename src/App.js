const MissionUtils = require('@woowacourse/mission-utils');
const {
  randomGenerator,
  checkError,
  isFinish,
  printFeedback,
  getScore,
} = require('./util');

const { Console } = MissionUtils;
const RESTART = '1';
const END = '2';

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    const answer = randomGenerator();
    this.startQuery(answer);
  }

  startQuery(answer) {
    Console.readLine('숫자를 입력해주세요 : ', (query) => {
      checkError(query);
      const score = getScore(answer, query);
      printFeedback(score);
      if (isFinish(score)) {
        Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
        this.replayOrQuit();
      } else {
        this.startQuery(answer);
      }
    });
  }

  replayOrQuit() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ',
      (input) => {
        if (input === END) {
          this.quitGame();
        } else if (input === RESTART) {
          this.play();
        } else {
          throw new Error('사용자 인풋 에러');
        }
      },
    );
  }

  quitGame() {
    Console.close();
  }
}

module.exports = App;
