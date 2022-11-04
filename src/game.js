const MissionUtils = require('@woowacourse/mission-utils');
const exitOrRestart = require('./exitOrRestart');

const game = (userNum, computerNum) => {
  let ballCount = 0;
  let strikeCount = 0;
};

const guessedCorrectly = () => {
  MissionUtils.Console.print('3스트라이크');
  MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  MissionUtils.Console.readLine(
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    (num) => {
      exitOrRestart(num);
    }
  );
};

module.exports = game;
