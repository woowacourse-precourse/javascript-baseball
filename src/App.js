const { Console } = require('@woowacourse/mission-utils');
const { getRandomNumbers, convertStringsToNumbers } = require('./utils');
const {
  HINT_MESSAGE_INVALID_PARAM,
  INPUT_FAIL_ERROR_MESSAGE,
} = require('./errorMessage');

const BASEBALL_NUMBER_CNT = 3;

class App {
  constructor() {
    this.computer = {
      randomNumbers: [],
    };
  }

  play() {
    this.startGame();
  }

  startGame() {
    this.print('숫자 야구 게임을 시작합니다.');

    this.setRandomNumbers();
    this.numberPrediction();
  }

  numberPrediction() {
    this.readLine('숫자를 입력해주세요 : ', (answer) => {
      const answers = answer.trim().split('');
      const rightAnswers = this.computer.randomNumbers;

      if (answers.length === BASEBALL_NUMBER_CNT) {
        const numbers = convertStringsToNumbers(answers);

        const { strike, ball } = this.getResult(numbers, rightAnswers);
        const hint = this.getHintMessage(strike, ball);

        this.print(hint);

        this.checkEndGame(strike);
      } else {
        throw new Error(INPUT_FAIL_ERROR_MESSAGE);
      }
    });
  }

  checkEndGame(strike) {
    if (strike === BASEBALL_NUMBER_CNT) {
      this.endGameInputMessage();
    } else {
      this.numberPrediction();
    }
  }

  endGame(answer) {
    const trimAnswer = answer.trim();

    if (trimAnswer === '1') {
      this.startGame();
    } else if (trimAnswer === '2') {
      Console.close();
    } else {
      throw new Error(INPUT_FAIL_ERROR_MESSAGE);
    }
  }

  endGameInputMessage() {
    this.print('3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    this.readLine(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
      (answer) => {
        this.endGame(answer);
      }
    );
  }

  getResult(answers, rightAnswers) {
    if (answers.length !== rightAnswers.length) {
      throw new Error(INPUT_FAIL_ERROR_MESSAGE);
    }

    let strike = 0;
    let ball = 0;

    for (const idx in answers) {
      if (answers[idx] === rightAnswers[idx]) {
        strike += 1;
        continue;
      }
      if (rightAnswers.includes(answers[idx])) {
        ball += 1;
      }
    }

    return { strike, ball };
  }

  getHintMessage(strike, ball) {
    if (strike < 0 || ball < 0) {
      throw new Error(HINT_MESSAGE_INVALID_PARAM);
    }
    if (strike === 0 && ball === 0) {
      return '낫싱';
    }

    let answer = '';

    if (ball > 0) {
      answer += `${ball}볼 `;
    }
    if (strike > 0) {
      answer += `${strike}스트라이크`;
    }

    return answer.trim();
  }

  setRandomNumbers() {
    const randomNumbers = getRandomNumbers(BASEBALL_NUMBER_CNT);

    this.computer = {
      randomNumbers,
    };
  }

  readLine(message, callback) {
    Console.readLine(message, callback);
  }

  print(message) {
    Console.print(message);
  }
}

module.exports = App;
