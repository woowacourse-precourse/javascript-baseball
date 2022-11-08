const MissionUtils = require('@woowacourse/mission-utils');
const RandomProduce = require('./RandomProduce');
const InputCheck = require('./InputCheck');
const Console = MissionUtils.Console;

class MainGame {
  constructor() {
    this.gameStart();
    this.InputCheck = new InputCheck();
  }

  play() {
    this.COMPUTER = RandomProduce.createRandom();
    this.getUserInput();
  }

  gameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  getUserInput() {
    Console.readLine('숫자를 입력해주세요 : ', (input) => {
      this.InputCheck.AvailCheck(input);

      this.InputCompare(input);
    });
  }

  InputCompare(input) {
    const userInput = input.split('').map((item) => Number(item));

    this.checkStrike(userInput);

    this.gameResult();
  }

  checkStrike(userInputArray) {
    this.ball = 0;
    this.strike = 0;

    this.COMPUTER.forEach((item, index) => {
      if (item === userInputArray[index]) {
        this.strike++;
      } else if (userInputArray.includes(item)) {
        this.ball++;
      }
    });
  }

  gameResult() {
    if (this.strike === 3) {
      Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');

      this.setRePlay();

      return;
    }

    if (this.ball === 0 && this.strike === 0) {
      Console.print('낫싱');

      this.getUserInput();

      return;
    }

    if (this.ball !== 0 && this.strike !== 0) {
      Console.print(`${this.ball}볼 ${this.strike}스트라이크`);

      this.getUserInput();

      return;
    }

    if (this.ball !== 0 && this.strike === 0) {
      Console.print(`${this.ball}볼`);

      this.getUserInput();

      return;
    }

    if (this.ball === 0 && this.strike !== 0 && this.strike !== 3) {
      Console.print(`${this.strike}스트라이크`);

      this.getUserInput();
    }
  }

  setRePlay() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (input) => {
        this.InputCheck.RePlayCheck(input);

        this.gameRePlay(input);
      }
    );
  }

  gameRePlay(input) {
    if (input === '1') {
      this.play();

      return;
    }

    if (input === '2') {
      Console.close();
    }
  }
}
module.exports = MainGame;
