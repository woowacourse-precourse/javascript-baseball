const MissionUtils = require('@woowacourse/mission-utils');

const guessedCorrectly = () => {
  MissionUtils.Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  MissionUtils.Console.readLine(
    '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
    (num) => {
      exitOrRestart(num);
    }
  );
};

const exitOrRestart = (num) => {
  if (num === '1') return true;
  if (num === '2') exit();
};

const exit = () => {
  MissionUtils.Console.close();
};

module.exports = guessedCorrectly;
