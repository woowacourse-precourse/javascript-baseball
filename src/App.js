const { Console, Random } = require("@woowacourse/mission-utils");

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
    Console.print('숫자 야구 게임을 시작합니다.');
    this.playNewGame();
  }

  // 게임 시작
  playNewGame() {
    this.RAND_NUM = [];
    this.INPUT_NUM = [];

    // 1. random number(컴퓨터 숫자) 생성
    this.createRandomNumber();

    // 사용자가 정답 입력
    this.inputUserAnswer();
  }

  // 1. random number(컴퓨터 숫자) 생성
  createRandomNumber() {
    while (this.RAND_NUM.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.RAND_NUM.includes(number)) {
        this.RAND_NUM.push(number);
      }
    }
  }

  inputUserAnswer() {
    this.init();
    //2. 사용자가 숫자를 입력한다. 
    Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const ANSWER = Array.from(answer);
      ANSWER.map((a, idx) => {
        this.INPUT_NUM[idx] = parseInt(a);
      })

      // 4. 사용자가 입력한 입력에 대한 validation을 수행한다.
      this.validateInput(this.INPUT_NUM);

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
    this.printMessages();
  }

  printMessages() {
    if (this.IS_NOTHING) {
      // 정답을 맞춘 경우가 아니면 사용자에게 입력만 다시 받기
      Console.print('낫싱');
      this.inputUserAnswer();
    } else {
      // 3. 정답을 맞춘 경우 게임 시작
      if (this.COUNT_STRIKE === 3) {
        Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n');
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

  validateInput(INPUT_NUM) {
    if (INPUT_NUM.length === 0) {
      throw '정답을 입력해 주세요!';
    }
    if (INPUT_NUM.length > 3) {
      throw '3자리의 수를 입력해 주세요!';
    }
    for (let i = 0; i < INPUT_NUM.length; i++) {
      if (INPUT_NUM[i] == INPUT_NUM[i + 1]) {
        throw '서로 다른 수를 입력해 주세요!';
      }
    }
  }
}

module.exports = App;