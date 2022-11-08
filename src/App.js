const { Console, Random } = require('@woowacourse/mission-utils');
class App {

  #sayStart() {
    Console.print('숫자 야구 시작합니다.');
  };

  #computerPicksNumber() {
    const computerPickArr = [];
    while (computerPickArr.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computerPickArr.includes(number)) {
        computerPickArr.push(number);
      }
    }
    const computerPick = computerPickArr.join('');
    console.log(computerPick);
    return computerPick;
  }

  #startGame() {
    const computerPick = this.#computerPicksNumber();
  };

  play() {
    this.#sayStart();
    this.#startGame();
  }
};


module.exports = App;
