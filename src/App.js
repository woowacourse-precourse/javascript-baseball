const MissionUtils = require("@woowacourse/mission-utils");
const Opponent = require("./Opponent");
const User = require("./User");

const ERROR_MSG = {
  // 에러 메시지 관련 문자열 상수
  UNAVAILABLE_RESTART: "불가능한 재시작 명령입니다.",
};

const GAME_MSG = {
  // 게임 메시지 관련 문자열 상수
  START: "숫자 야구 게임을 시작합니다.",
  END: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
  RESTART: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
};

class App {
  constructor() {
    this.opponent = new Opponent(); //상대방 등장
    this.user = new User(); //사용자(본인) 등장
  }

  play() {
    MissionUtils.Console.print(GAME_MSG.START);
    // this.gameStart();
    let restartGame = "1"; // 게임 진행 중에는 재시작 여부를 1로 지정
    while (restartGame === "1") {
      this.gameStart(); // 게임 시작
      restartGame = this.gameRestart();
      restartGame = this.checkRestartValidation(restartGame);
    }
    return MissionUtils.Console.close();
  }

  checkRestartValidation(restartGame) {
    // 게임 재시작 명령 유효성 검사
    // 1 또는 2 이외의 명령 시 재시작 또는 종료를 수행하지 않고 다시 입력받는다.
    while (restartGame !== "1" && restartGame !== "2") {
      MissionUtils.Console.print(ERROR_MSG.UNAVAILABLE_RESTART);
      restartGame = this.gameRestart();
    }
    return restartGame;
  }

  gameStart() {
    const opponentNumber = this.opponent.setRandomNumber(); // 상대방 숫자 지정
    let endGame = false; // 게임 진행 동안에는 게임 종료 여부를 false로 지정
    while (!endGame) {
      this.user.getInput(); // 사용자 예측값 입력
      this.user.checkValidation(); // 사용자 입력 유효성 검사
      this.user.changeToNumbers(); // 사용자 입력값이 문자 배열 형태이므로 숫자 배열로 변환
      const ballAndStrike = this.compareNumbers(opponentNumber, this.user.input); // 볼, 스트라이크 개수 추출
      this.printResult(ballAndStrike); // 볼, 스트라이크 결과값 화면 출력
      endGame = this.gameEnd(ballAndStrike); // 3스트라이크가 나오면 게임 종료 여부를 true로 지정
    }
  }

  gameEnd(ballAndStrike) {
    // 3스트라이크 여부 검사
    if (ballAndStrike[1] === 3) {
      MissionUtils.Console.print(GAME_MSG.END);
      return true;
    }
    return false;
  }

  gameRestart() {
    // 사용자로부터 게임 재시작 명령 입력 받음
    let restartGame;
    MissionUtils.Console.readLine(GAME_MSG.RESTART, (restartInput) => {
      restartGame = restartInput.toString().split("");
    });
    return restartGame[0]; // 사용자 입력에서 첫번째 원소 반환
  }

  compareNumbers(opponentArr, userArr) {
    // 상대방(컴퓨터)의 수와 사용자의 예측값 비교
    let ball = 0,
      strike = 0;
    for (let index = 0; index < 3; index++) {
      if (userArr.includes(opponentArr[index])) {
        if (opponentArr[index] !== userArr[index]) ball++; // 같은 숫자 다른 위치는 볼의 개수 증가
        else strike++; // 같은 숫자 같은 위치는 스트라이크의 개수 증가
      }
    }
    return [ball, strike];
  }

  printResult(ballAndStrike) {
    // 볼과 스트라이크의 개수 화면 출력
    // 0개의 볼 또는 0개의 스트라이크는 출력하지 않는다.
    // 둘 다 0개라면 '낫싱' 출력
    const ball = ballAndStrike[0];
    const strike = ballAndStrike[1];
    if (ball > 0 && strike > 0) MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
    else if (ball > 0 && strike === 0) MissionUtils.Console.print(`${ball}볼`);
    else if (ball === 0 && strike > 0) {
      MissionUtils.Console.print(`${strike}스트라이크`);
    } else if (ball === 0 && strike === 0) MissionUtils.Console.print("낫싱");
  }
}

module.exports = App;
