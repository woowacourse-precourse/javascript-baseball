const MissionUtils = require("@woowacourse/mission-utils");

function generateRandomNumbers(){
  const numberArray= [];
  while (numberArray.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!numberArray.includes(number)) {
      numberArray.push(number);
    }
  }
  return numberArray;
}

class App {
  constructor() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');
  }
  play() {
    this.startGame();
  }
  startGame() {
    var computer = generateRandomNumbers();
  }
}

module.exports = App;
