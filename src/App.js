const MissionUtils = require('@woowacourse/mission-utils');
const BaseBall = require('./baseBall');

class App {
  play() {
    let isRestart = true;
    let isCorrect = false;

    let randomDigit = -1;
    let userInputCheckNum = -1;

    let ballCount = -1;
    let strikeCount = -1;

    let userInputRestartNum = -1;

    // start game
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    // if user not want restart, break
    while (isRestart) {
      randomDigit = BaseBall.createRandomNumDigitArray();
      isCorrect = false;

      // if user correct answer, break
      while (!isCorrect) {
        MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (value) => {
          userInputCheckNum = value;
        });

        BaseBall.checkUserInput(userInputCheckNum);

        [strikeCount, ballCount] = BaseBall.getBallAndStrike(
          randomDigit,
          userInputCheckNum.split('')
        );

        isCorrect = BaseBall.gameResult(strikeCount, ballCount);
      }

      // when user correct answer
      MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      MissionUtils.Console.readLine(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
        (value) => {
          userInputRestartNum = Number(value);
        }
      );
      isRestart = BaseBall.getIsRestart(userInputRestartNum);
    }
  }
}

module.exports = App;
