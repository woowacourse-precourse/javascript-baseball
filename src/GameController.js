
const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;

const Validation = require("./Validatoin");
const Computer = require("./Computer");

class GameController {
  computer = new Computer();
  validation = new Validation();
  userInputs;

  score = {
    STRIKE: 0,
    BALL: 0,
  };

  // 점수 리셋
  resetScore() {
    this.score = {
      STRIKE: 0,
      BALL: 0
    };
  }

  // 게임 시작
  gameStart() {
    Console.print("숫자 야구 게임을 시작합니다.");
    this.computer.setRandomNumbers();
    this.saveUserInputs();
  }

  // 점수 계산기
  calculationScore() {
    // 점수 계산 전 초기화
    this.resetScore();

    [...this.userInputs].forEach((inputString, index) => {
      const inputNumber = Number(inputString);
      if (inputNumber === this.computer.randomNumbers[index]) {
        this.score.STRIKE += 1;
      } else if (this.computer.randomNumbers.includes(inputNumber)) {
        this.score.BALL += 1;
      }
    });

    this.printScoreMessage();

    if(this.score.STRIKE === 3) {
      Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
      this.isAginOrQuit();
    } else {
      this.saveUserInputs();
    }
  }

  saveUserInputs() {
    Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      this.validation.isValidUserInputNumber(answer);
      this.userInputs = answer;
      this.calculationScore();
    });
  }

  printScoreMessage() {
    const message = this.scoreMessage();
    Console.print(message);
  }

  scoreMessage() {
    const BALL = this.score.BALL;
    const STRIKE = this.score.STRIKE;

    if (!BALL && !STRIKE) return `낫싱`;

    if (!BALL && STRIKE) return `${STRIKE}스트라이크`;

    if (BALL && !STRIKE) return `${BALL}볼`;

    if (BALL && STRIKE) return `${BALL}볼 ${STRIKE}스트라이크`;
  }

  // 다시하기 / 게임종료 중 선택
  isAginOrQuit() {
    Console.readLine("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n", (answer) => {
      this.validation.isValidUserSettingNumber(answer);
      if(answer === '1') {
        return this.gameStart();
      }
      if(answer === '2') {
        return Console.close();
      }
    });
  }
}

module.exports = GameController;