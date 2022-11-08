const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");

let computerNum = [];

function start() {
  Console.print("숫자 야구 게임을 시작합니다.");
  computerNum = MakeNum();
  proceedGame(computerNum);
}

function MakeNum() {
  const randomNumber = [];
  while (randomNumber.length < 3) {
    const number = Random.pickNumberInRange(1, 9);
    if (!randomNumber.includes(number.toString())) {
      randomNumber.push(number.toString());
    }
  }
  return randomNumber;
}

function isvalidation(userNum) {
  userNumArray = userNum.split("");
  const setUserName = new Set(userNumArray);
  userNum = [...setUserName];
  if (userNum.length !== 3) {
    throw new Error("중복없는 3자리의 숫자를 입력하세요");
  }
  if (userNum.includes("0")) {
    throw new Error("0을 제외한 숫자를 입력하세요");
  }
  if (
    !userNum.every(
      (number) => number.charCodeAt() >= 49 && number.charCodeAt() <= 57
    )
  ) {
    throw new Error("올바른 숫자값을 입력해주세요");
  }
}

function replay() {
  Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ",
    (userNum) => {
      if (userNum === "1") {
        return start();
      }
      if (userNum === "2") {
        return exit();
      }
      Console.close();
      throw new Error("잘못된 값을 입력하였습니다.");
    }
  );
}

function exit() {
  Console.close();
}

function proceedGame() {
  Console.readLine("숫자를 입력해주세요 : ", (userNum) => {
    isvalidation(userNum);
    const [strike, ball] = isStrikeBall(userNum);
    userMessage(strike, ball);
    if (strike !== 3) {
      return proceedGame();
    }
    Console.print("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
    replay();
  });
}

function userMessage(strike, ball) {
  nothingMessage = !ball && !strike ? "낫싱" : "";
  strikeMessage = strike ? `${strike}스트라이크` : "";
  ballMessage = ball ? `${ball}볼 ` : "";
  Console.print(nothingMessage + ballMessage + strikeMessage);
}

function isStrikeBall(userNum) {
  let strike = 0;
  let ball = 0;
  userNum.split("").forEach((item, idx) => {
    const index = computerNum.indexOf(item);
    if (computerNum[idx] === item && index > -1) {
      return (strike += 1);
    }
    if (index > -1) {
      return (ball += 1);
    }
  });
  return [strike, ball];
}

class App {
  play() {
    start();
  }
}

const app = new App();
app.play();
module.exports = App;
