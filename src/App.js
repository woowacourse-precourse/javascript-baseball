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
    if (checkIndex[i] != i && cpuNumber.includes(userInput[i])) {
      ball++;
    }
  }

  if (nothing === 3) {
    return "낫싱";
  }
  if (strike === 3) {
    return "3스트라이크";
  }
  if (strike > 0 && ball === 0) {
    return `${strike}스트라이크`;
  }
  if (strike === 0 && ball > 0) {
    return `${ball}볼`;
  }
  return `${ball}볼 ${strike}스트라이크`;
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
  constructor(cpuNumber) {
    this.cpuNumber = cpuNumber;
  }
  play() {
    Console.print("숫자 야구게임을 시작합니다.");
    bullsAndCows.createNumber();
  }
  createNumber() {
    this.cpuNumber = cpuMakeAnswer();
    bullsAndCows.gaming();
  }

  gaming() {
    let userInput = [];
    let gameResult = "";

    Console.readLine("숫자를 입력해주세요 : ", (input) => {
      userInput = Array.from(input);
      for (let i = 0; i < userInput.length; i++) {
        userInput[i] = parseInt(userInput[i]);
      }

      Console.print(userInput);
      if (checkVaildUserInputValue(userInput)) {
        gameResult = UserInputValueCompareToCPUAnswer(
          this.cpuNumber,
          userInput
        );
        // Console.print(gameResult);
        if (gameResult == "3스트라이크") {
          Console.print(gameResult);

          Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
          Console.readLine(
            "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
            (newGame) => {
              if (newGame == 1) {
                bullsAndCows.play();
              } else if (newGame == 2) {
                Console.print("게임이 종료되었습니다.");
              } else {
                throw new Error("잘못된 명령어를 입력했습니다.");
              }
            }
          );
        } else {
          Console.print(gameResult);

          bullsAndCows.gaming();
        }
      }
    });
  }

  replay() {
    play();
  }
}

const bullsAndCows = new App();
bullsAndCows.play();

module.exports = App;
