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

  #validateGuess(guess) {
    if (!/^[1-9]{3}$/.test(guess)) {
      throw new Error('1-9 범위의 세 자리 수가 아닙니다: ' + guess);
    }
    if (guess[0] === guess[1] || guess[1] === guess[2] || guess[2] === guess[0]) {
      throw new Error('세 자리 수가 다르지 않습니다: ' + guess);
    }
  };

  #getHint(computerPick, guess) {
    let strikes = 0;
    let balls = 0;

    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
      if (computerPick[i] !== guess[j]) {
        continue;
      }

      if (i === j) {
        strikes++;
      } else {
        balls++;
      }
    }

    if (balls && strikes) {
      return `${balls}볼 ${strikes}스트라이크`;
    } else if (balls) {
      return `${balls}볼`;
    } else if (strikes) {
      return `${strikes}스트라이크`;
    } else {
      return '낫싱';
    }
  }

  #gameLoop(computerPick, guess) {
    this.#validateGuess(guess);
    Console.print(this.#getHint(computerPick, guess))
    if (computerPick === guess) {
      Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
      Console.readLine(
        '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
        response => {
          if (response.trim() === '1') {
            this.#startGame();
          } else if (response.trim() === '2') {
            return;
          } else {
            throw new Error('1 혹은 2가 아닌 값을 입력하였습니다');
          }
        }
      );
      return;
    }
    Console.readLine('숫자를 입력해주세요 : ', guess => {
      this.#gameLoop(computerPick, guess.trim());
    });
  }

  play() {
    this.#sayStart();
    this.#startGame();
  }
};


module.exports = App;
