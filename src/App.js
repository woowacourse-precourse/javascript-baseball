const { Console } = require("@woowacourse/mission-utils");
const { createRandomNumber, validateInput } = require('./Utils');


const SYSTEM_MESSAGES = {
  START: "숫자 야구 게임을 시작합니다.",
  REQUEST: "숫자를 입력해주세요 : ",
  FINISH: "3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
  NOTHING: "낫싱",
}

class App {
  constructor() {
    this.RAND_NUM = [];
    this.INPUT_NUM = [];
    this.IS_NOTHING = true;
    this.COUNT_BALL = 0;
    this.COUNT_STRIKE = 0;
  }

  init() {
    this.IS_NOTHING = true;
    this.COUNT_BALL = 0;
    this.COUNT_STRIKE = 0;
  }

  play() {
    Console.print(SYSTEM_MESSAGES.START);
    this.playNewGame();
  }

  // 게임 시작
  playNewGame() {
    this.RAND_NUM = [];
    this.INPUT_NUM = [];

    // 1. random number(컴퓨터 숫자) 생성
    this.RAND_NUM = createRandomNumber(this.RAND_NUM);

    // 사용자가 정답 입력
    this.inputUserAnswer();
  }

  // 사용자가 정답 입력
  inputUserAnswer() {
    this.init();

    //2. 사용자가 숫자를 입력한다. 
    Console.readLine(SYSTEM_MESSAGES.REQUEST, (answer) => {
      const ANSWER = Array.from(answer);
      ANSWER.map((a, idx) => {
        this.INPUT_NUM[idx] = parseInt(a);
      })

      console.log(this.INPUT_NUM, this.RAND_NUM, '입력 숫자, 랜덤 숫자')
      // 4. 사용자가 입력한 입력에 대한 validation을 수행한다.
      validateInput(this.INPUT_NUM);

      //2. randNum과 비교하여 결과를 확인한다.
      this.checkResult();
    });
  }

  checkResult() {
    // console.log(this.INPUT_NUM, this.RAND_NUM, '입력한 숫자, 랜덤 숫자');
    this.INPUT_NUM.map((num, idx) => {
      if (this.RAND_NUM.includes(num)) {
        this.IS_NOTHING = false
        if (num !== this.RAND_NUM[idx]) {
          this.COUNT_BALL++;
        } else {
          this.COUNT_STRIKE++;
        }
      }
    })
    
    // 결과에 따른 메세지 출력
    this.printMessages();
  }

  printMessages() {
    if (this.IS_NOTHING) {
      // 정답을 맞춘 경우가 아니면 사용자에게 입력만 다시 받기
      Console.print(SYSTEM_MESSAGES.NOTHING);
      this.inputUserAnswer();
    } else {
      // 3. 정답을 맞춘 경우 게임 다시 시작
      if (this.COUNT_STRIKE === 3) {
        Console.print(SYSTEM_MESSAGES.FINISH);
        if (this.INPUT_NUM.includes(1)) {
          this.playNewGame();
        } else {
          Console.close()
        }
      } else {
        // 정답을 맞춘 경우가 아니면 사용자에게 입력만 다시 받기
        Console.print(`${this.COUNT_BALL}볼 ${this.COUNT_STRIKE}스트라이크`);
        this.inputUserAnswer();
      }
    }
  }
}

module.exports = App;