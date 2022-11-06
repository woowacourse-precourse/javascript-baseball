const { Console } = require('@woowacourse/mission-utils');
const {
  isValidContinueOption,
  isValidUserInput,
} = require('./controllers/gameHandler');
const User = require('./players/User');

class App {
  constructor() {
    this.user = new User();
  }

  play() {
    try {
      // 구현이 끝난 뒤, 전부 함수화함으로써 depth indent 줄이기.
      // 게임 시작 콘솔
      Console.print('숫자 야구 게임을 시작합니다.');
      // 게임 진행 콘솔
      Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
        // 문제 없는 값인지 체크
        isValidUserInput(userInput);
        this.user.setUserNumber(userInput);
        Console.print(1111111111111);
        Console.print(this.user.number);

        // 게임끝 재시작 콘솔
        this.selectContinue();
      });
    } catch (error) {
      Console.print(error);
    }
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
