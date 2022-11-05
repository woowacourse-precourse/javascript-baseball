const { Console } = require('@woowacourse/mission-utils');
const { isValidContinueOption } = require('./controllers/gameHandler');

class App {
  play() {
    try {
      // 게임 시작 콘솔
      Console.print('숫자 야구 게임을 시작합니다.');

      // 게임 진행 콘솔
      Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
        Console.print(`input : ${userInput}`);

        // 게임끝 재시작 콘솔
        this.selectContinue();
      });
    } catch (err) {}
  }

  end() {
    Console.print('게임을 종료합니다.');
    return Console.close();
  }

  selectContinue() {
    Console.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
      (userInput) => {
        Console.print(`input : ${userInput}`);

        const playContinue = isValidContinueOption(userInput);
        if (playContinue) return this.play();

        return this.end();
      },
    );
  }
}

const app = new App();
app.play();
module.exports = App;
