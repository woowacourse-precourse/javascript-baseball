//module used
const { Console, Random } = require("@woowacourse/mission-utils");

//constants
const TOTAL_COUNT = 3;

class App {
  //properties
  #answer = ""; // 정답 문자열 저장하는 변수

  //functions
  getAnswer() {
    return this.#answer;
  }
  initAnswer() {
    // this.#answer = Random.pickUniqueNumbersInRange(1, 9, TOTAL_COUNT).join("");
    // return this.#answer;
    const answerList = [];
    while (answerList.length < TOTAL_COUNT) {
      const number = Random.pickNumberInRange(1, 9);
      if (answerList.indexOf(number) < 0) {
        answerList.push(number);
      }
    }
    this.#answer = answerList.join("");
    return this.#answer;
  }
  //input validation
  checkAnswerValidInput(player_input) {
    if (!player_input) throw new Error("Player Input Is Undefined!");
    if (player_input.length !== 3)
      throw new Error("Input string's length must be 3 characters!");
    if (new Set(player_input).size !== 3) throw new Error("no same");
    //숫자가 아닌 경우도 처리해야함
  }
  performOneGame(opponentInput) {
    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      // Console.print(opponentInput); //for test
      let [ball, strike] = this.countBallStrike(opponentInput, input);
      this.printBS(ball, strike);
      //afterCheckScore
      if (strike === TOTAL_COUNT) {
        //종료할지 다시할지 물어보기
        // Console.print(`${TOTAL_COUNT}개의 숫자를 모두 맞히셨습니다! 게임 종료`);
        Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        this.askReplay();
      } else {
        this.performOneGame(opponentInput);
      }
    });
  }
  askReplay() {
    Console.readLine(
      "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
      (input) => {
        this.checkOptionValid(input);
        if (input === "1") {
          const newAnswer = this.initAnswer();
          this.performOneGame(newAnswer);
        } else if (input === "2") {
          Console.close();
        }
      }
    );
  }
  checkOptionValid(input) {
    if (input.length !== 1) {
      throw new Error("length bad");
    }
    if ("12".indexOf(input) < 0) {
      throw new Error("bad options");
    }
  }
  printBS(ball, strike) {
    if (ball + strike === 0) {
      Console.print("낫싱");
    } else if (ball === 0) {
      Console.print(`${strike}스트라이크`);
    } else if (strike === 0) {
      Console.print(`${ball}볼`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  }
  countBallStrike(opponent_input, player_input) {
    let ball = 0;
    let strike = 0;
    this.checkAnswerValidInput(player_input);
    for (let idx in player_input) {
      strike += this.countIfStrike(player_input[idx], opponent_input[idx]);
      ball +=
        this.countIfBall(player_input[idx], opponent_input) &
        !this.countIfStrike(player_input[idx], opponent_input[idx]);
    }
    return [ball, strike];
  }

  countIfStrike(player_char, opponent_char) {
    if (player_char === opponent_char) return 1;
    return 0;
  }

  countIfBall(player_char, opponent_input) {
    if (opponent_input.indexOf(player_char) >= 0) {
      return 1;
    }
    return 0;
  }

  play() {
    const opponentString = this.initAnswer();
    Console.print("숫자 야구 게임을 시작합니다.");
    this.performOneGame(opponentString);
  }
}

module.exports = App;

// const app = new App();

// app.play();
