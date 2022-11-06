const { Console } = require('@woowacourse/mission-utils');
const {
  isValidContinueOption,
  isValidUserInput,
  checkAnswer,
} = require('./controllers/gameHandler');
const User = require('./players/User');
const Computer = require('./players/Computer');

class App {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
  }

  play() {
    // 구현이 끝난 뒤, 전부 함수화함으로써 depth indent 줄이기.
    // 게임 시작 콘솔
    Console.print('숫자 야구 게임을 시작합니다.');
    // 게임 진행 콘솔
    this.playGame();
  }

  playGame() {
    // 게임 진행 콘솔
    this.computer.createNumbers();
    this.guess();
  }

  guess() {
    Console.readLine('숫자를 입력해주세요 : ', (userInput) => {
      // 문제 없는 값인지 체크
      isValidUserInput(userInput);
      this.user.setNumber(userInput);
      const answerResult = checkAnswer(this.user.number, this.computer.number);
      const resultPrint = parseResultToString(answerResult);
      Console.print(resultPrint);

      // 게임끝 재시작 콘솔
      if (answerResult.strike === 3) return this.selectContinue();
      this.guess();
    });
  }

  end() {
    Console.print('게임을 종료합니다.');
    return Console.close();
  }

  selectContinue() {
    Console.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (userInput) => {
      const playContinue = isValidContinueOption(userInput);
      if (playContinue) return this.playGame();

      return this.end();
    });
  }
}

const parseResultToString = (answerResult) => {
  const textArray = ['볼', '스트라이크'];
  const answerArray = Object.entries(answerResult);
  const answerStringArray = answerArray.map(([_, value], index) => {
    if (!value) return;
    return `${value}${textArray[index]}`;
  });

  const parsedResult = answerStringArray.filter((i) => i);
  if (!parsedResult.length) return '낫싱';

  return parsedResult.join(' ');
};

module.exports = App;
