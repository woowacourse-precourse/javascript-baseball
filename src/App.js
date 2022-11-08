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
    Console.readLine('숫자를 입력해주세요 : ', guess => {
      this.#gameLoop(computerPick, guess.trim());
    })
  };

  #gameLoop(computerPick, guess) {

  }
  
  play() {
    this.#sayStart();
    this.#startGame();
  }
};


module.exports = App;
