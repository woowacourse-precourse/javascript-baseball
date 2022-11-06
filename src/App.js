const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  constructor() {
    this.gameSet = {};
    this.answer = [];
    this.round = 0;
    this.score = {
      strike: 0,
      ball: 0,
    }
    this.playing = 0;
  }

  gameSetting (min = 1, max = 9, length = 3) {
    return {
      NUM_MIN : min,
      NUM_MAX : max,
      NUM_LENGTH : length,
    };
  }

  choiceNumber () {
    const answer = [];
    const minNumber = this.gameSet.NUM_MIN;
    const maxNumber = this.gameSet.NUM_MAX;
    const lengthNumber = this.gameSet.NUM_LENGTH;
    
    this.answer = answer;

    while(answer.length < lengthNumber){
      const randomNumber = Random.pickNumberInRange(minNumber, maxNumber);
      answer.includes(randomNumber) ? answer : answer.push(randomNumber);
    }
  }

  printMsg(msg) {
    Console.print(msg);
  }

  gameStart () {
    this.gameSet = this.gameSetting();
    this.printMsg('숫자 야구 게임을 시작합니다.');
  }

}

module.exports = App;
