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
  let strike = 0;
  let ball = 0;
  let nothing = 0; // nothing이 3이면 낫싱처리
  let checkIndex = [];

  for (let i = 0; i < userInput.length; i++) {
    if (!cpuNumber.includes(userInput[i])) {
      nothing++;
    }
    checkIndex[i] = cpuNumber.indexOf(userInput[i]);
    if (checkIndex[i] == i) {
      strike++;
    }
  }

  if (nothing === 3) {
    return "낫싱";
  }
  if (strike === 3) {
    return "3스트라이크";
  }
}

/**
 * @description 컴퓨터가 랜덤으로 만든 정답값
 */
function cpuMakeAnswer() {
  const computer = [];
  while (computer.length < 3) {
    const number = Random.pickNumberInRange(1, 9);

    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  console.log(computer);

  return computer;
}

class App {
  constructor() {}
  play() {
    const cpuNumber = cpuMakeAnswer();
    // const cpuNumber = [3, 2, 9];
    let userInput = [];
    let gameResult = "";
    Console.print("숫자 야구게임을 시작합니다.");

    /**
     * to-do readLine이 못맞추면 참 -> 숫자 계속입력 맞추면 폴스 -> 게임종료
     */

    Console.readLine("숫자를 입력해주세요.", (input) => {
      userInput = Array.from(input);
      for (let i = 0; i < userInput.length; i++) {
        userInput[i] = parseInt(userInput[i]);
      }

      Console.print(userInput);
      if (checkVaildUserInputValue(userInput)) {
        gameResult = UserInputValueCompareToCPUAnswer(cpuNumber, userInput);
        Console.print(gameResult);
      }
    });

    // const userInput = [1, 2, 3];
    // const userInput = [1, 2, 3]; // 1볼 1스트라이크
    // const userInput = [3, 2, 9]; // 3스트라크
    // const userInput = [4, 8, 7]; // 낫싱
    // const userInput = [9, 3, 2]; // 3볼
  }
}

const bullsAndCows = new App();
bullsAndCows.play();

module.exports = App;
