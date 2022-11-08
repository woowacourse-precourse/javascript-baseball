const MissionUtils = require("@woowacourse/mission-utils");

// function createRandNum() {
//   let randNum = [];

//   for (let i = 0; i < 3; i++) {
//     let tempNum = MissionUtils.Random.pickNumberInList([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//     if (!randNum.includes(tempNum)) {
//       randNum.push(tempNum);
//     } else {
//       i--;
//     }
//   }

//   console.log(randNum, 'random number 생성');
//   MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

//   return randNum
// }

// function inputUserAnswer(randNum) {
//   let strike = 0;
//   let ball = 0;
//   let inputNum = [];

//   MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
//     for (a of answer) {
//       inputNum.push(parseInt(a))
//     }
//     console.log(inputNum, '입력된 숫자');

//     // 낫싱인지 확인
//     if (checkNothing(randNum, inputNum)) {
//       MissionUtils.Console.print('낫싱');
//     } else {
//       // 스트라이크 갯수 확인
//       strike = checkStrike(randNum, inputNum);
//       // 볼 갯수 확인
//       ballList = checkBall(randNum, inputNum);
//     }
//     if (strike === 3) {
//       MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n')
//       MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (opinion) => {
//         if (opinion === 1) {
//           inputUserAnswer();
//         } else {
//           MissionUtils.Console.close()
//         }
//       })
//     } else {
//       MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
//       inputUserAnswer();
//     }
//   })
// }

class App {
  constructor() {
    this.randNum = [];
    this.inputNum = [];
    this.isNothing = true;
    this.ball = 0;
    this.strike = 0;
  }

  play() {
    MissionUtils.Console.print('숫자 야구 게임을 시작합니다.');

    // 1. 컴퓨터가 정답(1-9 사이의 서로 다른 수로 이루어진 3자리 숫자)을 생성한다.
    while (this.randNum.length < 3) {
      const number = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!this.randNum.includes(number)) {
        this.randNum.push(number);
      }
    }

    this.playGame();
  }

  playGame() {
    this.init();

    //2. 사용자가 숫자를 입력한다. 
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      const ANSWER = Array.from(answer);
      ANSWER.map((a, idx) => {
        this.inputNum[idx] = parseInt(a);
      })

      console.log(this.randNum, this.inputNum, "랜덤 숫자, 입력 숫자")
      this.validateInput(this.inputNum);

      //2. randNum과 비교하여 결과를 확인한다.
      this.checkResult();
    });
  }

  init() {
    this.isNothing = true;
    this.ball = 0;
    this.strike = 0;
  }

  checkResult() {
    // console.log(this.inputNum, this.randNum, '입력한 숫자, 랜덤 숫자');
    if (this.inputNum !== []) {
      this.inputNum.map((num, idx) => {
        if (this.randNum.includes(num)) {
          this.isNothing = false
          if (num !== this.randNum[idx]) {
            this.ball++;
          } else {
            this.strike++;
          }
        }
      })
      this.printMessages();
    }
  }

  printMessages() {
    if (this.isNothing) {
      // 정답을 맞춘 경우가 아니면 사용자에게 입력만 다시 받기
      MissionUtils.Console.print('낫싱');
      this.playGame();
    } else {
      // 3. 정답을 맞춘 경우 게임 시작
      if (this.strike === 3) {
        // MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n')
        console.log('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n');
        MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (opinion) => {
          if (opinion === 1) {
            this.play();
          } else {
            MissionUtils.Console.close()
          }
        })
      } else {
        // 정답을 맞춘 경우가 아니면 사용자에게 입력만 다시 받기
        MissionUtils.Console.print(`${this.ball}볼 ${this.strike}스트라이크`);
        this.playGame();
      }
    }
  }

  validateInput(input) {
    if (input.length === 0) {
      throw '정답을 입력해 주세요!';
    }
    if (input.length > 3) {
      throw '3자리의 수를 입력해 주세요!';
    }
    for (let i = 0; i < this.inputNum.length; i++) {
      if (input[i] == input[i + 1]) {
        throw '서로 다른 수를 입력해 주세요!';
      }
    }
  }
}

module.exports = App;