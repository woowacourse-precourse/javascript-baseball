const MissionUtils = require("@woowacourse/mission-utils");

class App {
  constructor() {
    MissionUtils.Console.print("숫자 야구 게임을 시작합니다.");
  }
  play() {
    // 컴퓨터 랜덤 값 생성
    this.computerNumber = RandomChoice();
    // 사용자 값 입력
    this.userInput();
    console.log(this.computerNumber);
  }
  userInput() {
    let userNumber;
    MissionUtils.Console.readLine("숫자를 입력해주세요 : ", (answer) => {
      userNumber = answer.split("").map((number) => +number);
      checkValidNumber(answer);
      const resultCount = getCount(userNumber, this.computerNumber);
      getResult(resultCount);
      console.log(userNumber);
      if (resultCount.strike !== 3) {
        return this.userInput();
      }
      this.gameClear();
    });
  }
  gameClear() {
    MissionUtils.Console.readLine(
      "3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.",
      (answer) => {
        checkValidation(answer);
        console.log(answer);
        if (+answer === 1) {
          this.play();
        }
        if (+answer === 2) {
          MissionUtils.Console.print("게임 종료");
          MissionUtils.Console.close();
        }
      }
    );
  }
}

function checkValidation(answer) {
  if (![1, 2].includes(+answer)) throw new Error("1과 2만 입력할 수 있습니다.");
}
function getCount(userNumber, computerNumber) {
  const result = {
    strike: 0,
    ball: 0,
  };
  userNumber.forEach((userElement, index) => {
    const computerElement = computerNumber[index];
    if (userElement === computerElement) {
      return result.strike++;
    }
    if (computerNumber.includes(userElement)) {
      return result.ball++;
    }
  });
  return result;
}

function getResult(result) {
  let resultMessage = "";
  if (result.ball) {
    resultMessage += `${result.ball}볼`;
  }
  if (result.strike) {
    resultMessage += ` ${result.strike}스트라이크`;
  }
  if (resultMessage === "") {
    resultMessage = "낫싱";
  }
  MissionUtils.Console.print(resultMessage);
}

function RandomChoice() {
  let randomNumber = new Set();
  addNumber(randomNumber);
  randomNumber = [...randomNumber];
  return randomNumber;
}

function addNumber(randomNumber) {
  const number = MissionUtils.Random.pickNumberInRange(1, 9);
  randomNumber.add(number);
  if (randomNumber.size < 3) addNumber(randomNumber);
}

// 유저 입력 예외처리
function checkValidNumber(answer) {
  const checkDeplicated = [...new Set(answer)];
  if (answer.length !== 3) throw new Error("3글자여야 합니다.");
  if (!answer.match(/[1-9]/)) {
    throw new Error("1에서 9짜리의 숫자만 입력해주세요.");
  }
  if (checkDeplicated.length !== 3) {
    throw new Error("중복되지 않는 값을 입력해주세요.");
  }
}
const app = new App();
app.play();

module.exports = App;
