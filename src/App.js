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
}

/**
 * @description 유저가 입력한 값이 답과 일치하는지 비교
 */
function UserInputValueCompareToCPUAnswer(answerNumber, userInput) {
  let splitAnswerNumber = [];
  for (let i = 0; i < answerNumber.length; i++) {}
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
    // const answerNumber = cpuMakeAnswer();
    const answerNumber = [3, 2, 9];
    const userInput = [1, 2, 3];
    Console.print("숫자 야구게임을 시작합니다.");
    checkVaildUserInputValue(userInput);
    UserInputValueCompareToCPUAnswer(answerNumber, userInput);
  }

  callResult() {}
}

const app = new App();
app.play();

module.exports = App;
