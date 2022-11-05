const { Console, Random } = require("@woowacourse/mission-utils");

/**
 * @description 유저입력값의 유효성을 확인하는 기능
 */
function checkVaildUserInputValue(userInput) {
  let check = /^[1-9]+$/;
  const set = new Set(userInput);

  if (userInput.length !== 3) {
    throw new Error("3자리의 숫자를 입력해야합니다.");
  }
  for (let i = 0; i < userInput.length; i++) {
    if (!check.test(userInput[i])) {
      throw new Error("1~9까지의 숫자만 입력 가능합니다.");
    }
  }
  if (set.size !== userInput.length) {
    throw new Error("중복 숫자를 입력할 수 없습니다.");
  }
  return true;
}

/**
 * @description 유저가 입력한 값이 답과 일치하는지 비교
 */
function UserInputValueCompareToCPUAnswer(cpuNumber, userInput) {
  let splitCPUNumber = [];
  let splitUserNumber = [];
  let strike = 0;
  let ball = 0;
  let nothing = 0; // nothing이 3이면 낫싱처리
  for (let i = 0; i < userInput.length; i++) {
    // if (userInput[i].includes()) {
    //   console.log("3스");
    // }

    if (!cpuNumber.includes(userInput[i])) {
      nothing++;
    }
    if (cpuNumber.includes(userInput[i])) {
      strike++;
    }
  }
  if (nothing === 3) {
    return "낫싱";
  }
  console.log(strike);
  console.log(ball);
  console.log(nothing);
}

/**
 * @description 컴퓨터가 랜덤으로 만든 정답값
 */
function cpuMakeAnswer() {
  // 입력받는 방법몰라서 임의값넣느라 미사용처리
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }

  return computer;
}

class App {
  constructor() {}
  play() {
    // const cpuNumber = cpuMakeAnswer();
    const cpuNumber = [3, 2, 9];

    // const userInput = [1, 2, 3];
    // const userInput = [1, 2, 3]; // 1볼 1스트라이크
    const userInput = [3, 2, 9]; // 3스트라크
    // const userInput = [4, 8, 7]; // 낫싱
    // const userInput = [9, 3, 2]; // 3볼
    Console.print("숫자 야구게임을 시작합니다.");
    if (checkVaildUserInputValue(userInput)) {
      UserInputValueCompareToCPUAnswer(cpuNumber, userInput);
    }
  }
}

const bullsAndCows = new App();
bullsAndCows.play();

module.exports = App;
