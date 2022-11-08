const MissionUtils = require('@woowacourse/mission-utils');

const computer = [];
while (computer.length < 3) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  if (!computer.includes(number)) {
    computer.push(number);
  }
}

const gameStart = () => {
  MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
};

const getUserNumber = () => [
  MissionUtils.Console.readLine('숫자를 입력해주세요. : ', (answer) => answer),
];

class App {
  play() {
    gameStart();
    const userNumber = getUserNumber();
  }
}

const test = new App();
test.play();

module.exports = App;
