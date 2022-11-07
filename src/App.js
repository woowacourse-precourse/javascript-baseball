const MissionUtils = require("@woowacourse/mission-utils");

class App {
  play() {
    // 게임 시작
    gameStart();
    // 컴퓨터 랜덤 값 생성
    const computerNumber = RandomChoice();
    // 사용자 값 입력
    const userNumber = userInput();
  }
}

const gameStart = () => {
  MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
};

const RandomChoice = () => {
  const randomNumber = [];
  while (randomNumber.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!randomNumber.includes(number)) {
      randomNumber.push(number);
    }
  }
  return randomNumber;
};

// 유저 입력을 배열화
function userInput() {
  let userNumber;
  MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
    checkValidNumber(answer);
    userNumber = answer.split("").map((number) => number);
  });
  return userNumber;
}

function checkValidNumber(answer) {
  const checkDeplicated = [...new Set(answer)];
  if (!answer.match(/[1-9]/)) {
    throw new Error("1에서 9짜리의 숫자만 입력해주세요.");
  }
  if (answer.size !== 3) {
    throw new Error("3자리 숫자만 입력해주세요.");
  }
  if (checkDeplicated.length !== 3) {
    throw new Error("중복되지 않는 값을 입력해주세요.");
  }
}

module.exports = App;
