
const MissionUtils = require("@woowacourse/mission-utils");
const { Console } = MissionUtils;

const Validation = require("./Validatoin");
const Computer = require("./Computer");
const { GameMessage } = require("./Contants");

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
    Console.print(GameMessage.GAME_START);
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
    this.isWinOrUserInputAgain();
  }

  // 스트라이크가 3개일 경우 게임 
  isWinOrUserInputAgain() {
    if(this.score.STRIKE === 3) {
      return this.gameWin();
    } 
    
    // 다시 유저 입력값 받기
    this.saveUserInputs();
  }

  // 3스트라이크일 경우에
  gameWin() {
    // 게임 종료 메시지 출력
    Console.print(GameMessage.GAME_WIN);
    // 게임종료 | 다시하기 기능
    this.isAginOrExit();
  }

  // 유저 입력값 저장
  saveUserInputs() {
    Console.readLine(GameMessage.PLEASE_INPUT_NUMBER, (answer) => {
      // 유저 입력값 유효성 검사
      this.validation.isValidUserInputNumber(answer);
      // 유저 입력값 저장
      this.userInputs = answer;
      // 점수 계산
      this.calculationScore();
    });
  }

  // 점수에 따른 메시지 출력
  printScoreMessage() {
    const message = this.scoreMessage();
    Console.print(message);
  }

  // 점수에 따른 메시지 반환
  scoreMessage() {
    const BALL = this.score.BALL;
    const STRIKE = this.score.STRIKE;

    if (!BALL && !STRIKE) return `낫싱`;

    if (!BALL && STRIKE) return `${STRIKE}스트라이크`;

    if (BALL && !STRIKE) return `${BALL}볼`;

    if (BALL && STRIKE) return `${BALL}볼 ${STRIKE}스트라이크`;
  }

  // 다시하기 / 게임종료 중 선택
  isAginOrExit() {
    Console.readLine(GameMessage.GAME_AGAIN_OR_EXIT, (answer) => {
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