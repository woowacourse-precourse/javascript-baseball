const { Console } = require("@woowacourse/mission-utils");

class View {
  constructor(controller) {
    this.controller = controller;
    this.WELCOME_COMMENT = "숫자 야구 게임을 시작합니다.";
    this.GET_INPUT_COMMET = "숫자를 입력해주세요 : ";
    this.WRONG_COMMENT =
      "Input error! 1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 입력해주세요";
    this.GAME_FINISHED_COMMENT = "3개의 숫자를 모두 맞히셨습니다! 게임 종료";
    this.RESTART_COMMENT =
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n";
    this.RESTART_INVALID_INPUT_COMMENT =
      "1(게임 재시작) 혹은 2(게임 종료) 만 입력 가능합니다.";
    this.CLOSING_COMMENT = "게임 종료";
  }

  /**
   * 첫 게임이라면 환영 메세지를 출력한다.
   * @param {boolean} isFirstGame [첫 개임인지 여부]
   */
  printWelcomeMessage(isFirstGame) {
    if (isFirstGame) {
      Console.print(this.WELCOME_COMMENT);
    }
  }

  // 유저로부터 숫자를 제시받는다.
  getUserGuessInput() {
    Console.readLine(this.GET_INPUT_COMMET, (userGivenString) => {
      this.controller.updateUserGivenNumber(userGivenString);
    });
  }

  /**
   * strike, ball 결과를 받아 결과 문자열을 출력한다.
   * @param {number} strike [strike 개수]
   * @param {number} ball [ball 개수]
   */
  printSingleTryResult([strike, ball]) {
    let singleTryResultComment = "";

    if (!strike && !ball) {
      singleTryResultComment += "낫싱";
    }

    if (ball) {
      singleTryResultComment += `${ball}볼 `;
    }
    if (strike) {
      singleTryResultComment += `${strike}스트라이크`;
    }

    Console.print(singleTryResultComment.trim());
  }

  // 게임이 끝났을 때 상응하는 메세지를 출력한다.
  printGameFinished() {
    Console.print(this.GAME_FINISHED_COMMENT);
  }

  // 게임이 끝났을 때 유저의 재시작 의사를 받는다
  getRestartInput() {
    Console.readLine(this.RESTART_COMMENT, (restartUserInput) =>
      this.controller.checkIsRestartUserInputValid(restartUserInput)
    );
  }

  // 게임 완전 종료
  finishGame() {
    Console.print(this.CLOSING_COMMENT);
    Console.close();
  }

  // 유저 제시 Input 에 대한 에러를 throw 한다.
  throwUserGuessInputError() {
    throw new Error(this.WRONG_COMMENT);
  }

  // 게임 제시작 의사 Input 에 대한 에러를 throw 한다.ㄴ
  trowUserRestartInputError() {
    throw new Error(this.RESTART_INVALID_INPUT_COMMENT);
  }
}

module.exports = View;
