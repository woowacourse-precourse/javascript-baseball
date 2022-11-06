const { Console } = require('@woowacourse/mission-utils');

const Computer = require('./Computer');

const COMMAND = {
  RESTART: 1,
  QUIT: 2,
};

class App {
  play() {
    this.printGameStart();
    this.initGame();
  }

  printGameStart() {
    Console.print('숫자 야구 게임을 시작합니다.');
  }

  initGame() {
    this.computer = new Computer();
    this.run();
  }

  run() {
    Console.readLine('숫자를 입력해주세요 : ', input => {
      const { numberOfStrike, hintString } = this.computer.processInput(input);
      Console.print(hintString);

      if (numberOfStrike !== 3) {
        this.run();
      } else {
        this.printPlayerWinGame();
        this.askRestartOrTerminate();
      }
    });
  }

  printPlayerWinGame() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
  }

  askRestartOrTerminate() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      input => {
        const command = Number(input.trim());
        this.handleCommand(command);
      },
    );
  }

  handleCommand(command) {
    if (command === COMMAND.RESTART) {
      this.initGame();
    } else if (command === COMMAND.QUIT) {
      this.quit();
    } else {
      throw new Error('잘못된 입력입니다. 프로그램을 종료합니다.');
    }
  }

  quit() {
    Console.close();
  }
}

const app = new App();
app.play();

module.exports = App;
