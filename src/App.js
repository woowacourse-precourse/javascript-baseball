const MissionUtils = require('@woowacourse/mission-utils');
const { Console, Random } = MissionUtils;

class App {
  play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    startGame();
  }
}

const startGame = () => {
  let randomNumberArray = [];

  for (let i = 0; i < 3; i++) {
    let randomNumber = Random.pickNumberInRange(1, 9);
    if (!randomNumberArray.includes(randomNumber))
      randomNumberArray.push(randomNumber);
  }
};

module.exports = App;
