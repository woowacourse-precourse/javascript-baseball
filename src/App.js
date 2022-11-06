const { Console } = require("@woowacourse/mission-utils");
const { Random } = require("@woowacourse/mission-utils");

let computerNum = [];

function play() {
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
  return true;
  //값에 0을 포함하는지
  //입력받은 데이터값에 문자가 포함되어있지 않은지
  //number_max가 3인지
  //중복된숫자는 없는지
}

function throwError() {
  throw new Error("잘못된 값을 입력하였습니다.");
  // 가능하면 try..catch..finally 로 수정
}

function replay() {
  Console.readLine(
    "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요. ",
    (userNum) => {
      if (userNum === "1") {
        return play();
      }
      if (userNum === "2") {
        return exit();
      }
    }
  );
}

function exit() {
  Console.close();
}

function proceedGame() {
  Console.readLine("숫자를 입력해주세요 : ", (userNum) => {
    const validation = isvalidation(userNum);
    if (validation === false) {
      return throwError();
    }
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
  if (strike === 0 && ball === 0) {
    return Console.print("낫싱");
  }
  Console.print(ball + "" + "볼 " + strike + "" + "스트라이크");
  //0개는 출력물로 처리하면 안됨.
}


class App {
  start() {
    play();
  }
}

const baseBallGame = new App();
baseBallGame.start();
module.exports = App;
