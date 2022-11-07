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
  play() {
    // 1. 컴퓨터가 정답(1-9 사이의 서로 다른 수로 이루어진 3자리 숫자)을 생성한다.
    const RAND_NUM = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3);
    //2. 사용자가 숫자를 입력한다. 
    const INPUT_NUM = this.inputUserAnswer();
  }

  inputUserAnswer() {
    let input = [];
    MissionUtils.Console.readLine('숫자를 입력해주세요 : ', (answer) => {
      for (let a of answer) {
        input.push(parseInt(a));
      }
    })
    return input
  }

  checkNothing() {
    let isNothing = true;

    INPUT_NUM.map((num, idx) => {
      if (RAND_NUM.includes(num)) {
        isNothing = false;
      }
    })

    return isNothing
  }

  checkBall() {
    let ball = 0;

    INPUT_NUM.map((num, idx) => {
      if (RAND_NUM.includes(num) && num !== RAND_NUM[idx]) {
        ball++;
      }
    })

    return ball
  }

  checkStrike() {
    let strike = 0;

    INPUT_NUM.map((num, idx) => {
      if (num === RAND_NUM[idx]) {
        strike++;
      }
    })

    return strike
  }

  printMessages() {
    let strike = this.checkStrike;
    let ball = this.checkBall;
    if (this.checkNothing) {
      MissionUtils.Console.print('낫싱');
    } else if (strike === 3) {
      MissionUtils.Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료\n')
      MissionUtils.Console.readLine('게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.', (opinion) => {
        if (opinion === 1) {
          inputUserAnswer();
        } else {
          MissionUtils.Console.close()
        }
      })
    } else {
      MissionUtils.Console.print(`${ball}볼 ${strike}스트라이크`);
      inputUserAnswer();
    }

  }
}

module.exports = App;