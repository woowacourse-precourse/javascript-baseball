const MissionUtils = require('@woowacourse/mission-utils');

class App {
  play() {
    this.startGame();
    this.playBaseballGame();
  }

  startGame() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다');
  }

  playBaseballGame() {
    const computerInputNumbers = this.getComputerNumber();
    this.getUserNumbers(computerInputNumbers);
  }

  getComputerNumber() {
    const computerNumbers = [];

    while (computerNumbers.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);

      if (!computerNumbers.includes(randomNumber)) {
        computerNumbers.push(randomNumber);
      }
    }
    return computerNumbers.join('');
  }

  getUserNumbers(computerInputNumbers) {
    MissionUtils.Console.readLine('숫자를 입력해주세요 :', (userAnswer) => {
      this.isValidUserNumbers(userAnswer, computerInputNumbers);
    });
  }

  isValidUserNumbers(userAnswer, computerInputNumbers) {
    const userNumbers = userAnswer.split('').map((number) => parseInt(number, 10));
    this.isScopeUserNumber(userNumbers);
    this.isScopeLength(userNumbers);
    this.isScopeDuplication(userNumbers);

    this.checkGameResult(computerInputNumbers, userNumbers);
  }

  isScopeUserNumber(userNumbers) {
    const isScope = userNumbers.every((number) => (number >= 1 && number <= 9 ? true : false));

    if (!isScope) {
      throw new Error('1 ~ 9까지의 숫자만 입력하세요');
    }
  }

  isScopeLength(userNumbers) {
    if (userNumbers.length !== 3) {
      throw new Error('3자리의 숫자를 입력하세요');
    }
  }

  isScopeDuplication(userNumbers) {
    const isDuplication = new Set(userNumbers);

    if (isDuplication.length < 3) {
      throw new Error('중복이 없는 각기 다른 3자리 숫자를 입력하세요');
    }
  }

  checkGameResult(computerInputNumbers, userNumbers) {
    const gameScore = this.calculateGameScore(computerInputNumbers, userNumbers);
    const gameResult = this.printGameScore(gameScore);
  }

  calculateGameScore(computerInputNumbers, userNumbers) {
    let ballCount = 0;
    let strikeCount = 0;

    const overlappingNumbers = [...computerInputNumbers].filter((number) =>
      [...userNumbers].includes(number)
    );
    overlappingNumbers.forEach((number) => {
      ballCount++;

      if (computerInputNumbers.indexOf(number) === userNumbers.indexOf(number)) {
        ballCount--;
        strikeCount++;
      }
    });
    return [ballCount, strikeCount];
  }

  printGameScore(gameScore) {
    const scoreBallAndStrike = [
      { name: 볼, score: gameScore[0] },
      { name: 스트라이크, score: gameScore[1] },
    ];

    let checkedScore = scoreBallAndStrike.filter((item) => {
      return item.gameScore >= 1;
    });

    let gameOutcome = checkedScore.map((item) => {
      return `${item.score} ${item.name}`;
    });

    if (gameOutcome.length === 0) {
      gameOutcome = '낫싱';
    }
    MissionUtils.Console.print(gameOutcome);
    return gameOutcome;
  }
}

const app = new App();
app.play();

module.exports = App;
